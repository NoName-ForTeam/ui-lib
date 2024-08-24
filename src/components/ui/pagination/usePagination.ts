import { useMemo } from 'react'

const DOTS = '...' as const

/**
 * Props for the usePagination hook.
 * @typedef {Object} PaginationProps
 * @property {number} currentPage - The current active page number.
 * @property {function(number): void} onChangePage - Callback function when the page changes.
 * @property {number} pageSize - The number of items per page.
 * @property {number} siblingCount - The number of sibling pages to show around the current page.
 * @property {number} totalCount - The total number of items.
 */

type Props = {
  currentPage: number
  onChangePage: (num: number) => void
  pageSize: number
  siblingCount: number
  totalCount: number
}

/** Type for the pagination range array */

type PaginationRange = (number | typeof DOTS)[]

/**
 * Custom hook for generating pagination logic.
 * @param {PaginationProps} props - The props object.
 * @returns {Object} An object containing pagination functions and range.
 */

export const usePagination = ({
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS

    const totalPageNumbers = siblingCount + 5

    if (totalCount <= 0 || pageSize <= 0) {
      return []
    }

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the getRange [1..totalPageCount]
    */

    if (totalPageNumbers >= totalPageCount) {
      return getRange(1, totalPageCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within getRange 1 and totalPageCount
    */

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = getRange(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = getRange(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getRange(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
    return getRange(1, totalPageCount)
  }, [totalCount, pageSize, siblingCount, currentPage]) as PaginationRange

  const handlePageChange = (num: number) => {
    if (typeof num === 'number') {
      onChangePage(num)
    }
  }
  const handleClickPrevBtn = () => {
    if (currentPage <= totalCount && currentPage > 1) {
      onChangePage(currentPage - 1)
    }
  }
  const handleClickNextBtn = () => {
    if (currentPage < Math.ceil(totalCount / pageSize)) {
      onChangePage(currentPage + 1)
    }
  }

  return {
    handleClickNextBtn,
    handleClickPrevBtn,
    handlePageChange,
    paginationRange,
  }
}

/**
 * Generates a range of numbers.
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {number[]} An array of numbers from start to end, inclusive.
 */

function getRange(start: number, end: number) {
  const length = end - start + 1

  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */

  return Array.from({ length }, (_, idx) => idx + start)
}
