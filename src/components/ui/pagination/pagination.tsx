import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { ArrowIosBack, ArrowIosForward } from '@/assets'
import { clsx } from 'clsx'

import styles from './pagination.module.scss'

import { Typography } from '../typography'
import { usePagination } from './usePagination'

/**
 * Props for the Pagination component.
 * @typedef {Object} PaginationProps
 * @property {ReactNode} [children] - The child elements of the pagination component.
 * @property {number} currentPage - The current active page number.
 * @property {function(number): void} onChangePage - Callback function when the page changes.
 * @property {number} pageSize - The number of items per page.
 * @property {number} [siblingCount=1] - The number of sibling pages to show around the current page.
 * @property {number} totalCount - The total number of items.
 */

type PaginationProps = {
  currentPage: number
  onChangePage: (num: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & ComponentPropsWithoutRef<'div'>

/**
 * A custom Pagination component.
 * Source: www.freecodecamp.org/news/*build-a-custom-pagination-component-in-react/
 * @param {PaginationProps} props - The props for the Pagination component.
 * @returns {JSX.Element} - The rendered Pagination component.
 */

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      children,
      currentPage,
      onChangePage,
      pageSize,
      siblingCount = 1,
      totalCount,
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = { container: styles.container, root: clsx(styles.root, className) } as const
    const { handleClickNextBtn, handleClickPrevBtn, handlePageChange, paginationRange } =
      usePagination({ currentPage, onChangePage, pageSize, siblingCount, totalCount })

    const disabledPrevBtn = currentPage < 2
    const disabledNextBtn = currentPage >= Math.ceil(totalCount / pageSize)

    const mainButtons = React.useMemo(
      () =>
        paginationRange.map((pageLocal, i) => {
          const isSelected = currentPage === pageLocal

          return (
            <PaginationButton
              isSelected={isSelected}
              key={i}
              onClick={() => handlePageChange(pageLocal as number)}
            >
              <Typography as={'span'} variant={'text14'}>
                {pageLocal}
              </Typography>
            </PaginationButton>
          )
        }),
      [paginationRange, currentPage, handlePageChange]
    )

    return (
      <div className={clsx(classNames.root)} {...rest} ref={ref}>
        <PaginationButton
          aria-label={'Previous page'}
          disabled={disabledPrevBtn}
          onClick={() => handleClickPrevBtn()}
        >
          <ArrowIosBack />
        </PaginationButton>
        <div className={clsx(classNames.container)}>
          {mainButtons}
          <PaginationButton
            aria-label={'Next page'}
            disabled={disabledNextBtn}
            onClick={() => {
              handleClickNextBtn()
            }}
          >
            <ArrowIosForward />
          </PaginationButton>
        </div>
        {children}
      </div>
    )
  }
)

/**
 * Props for the PaginationButton component.
 * @typedef {Object} PaginationButtonProps
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {boolean} [isSelected] - Whether the button is selected.
 * @property {function(): void} [onClick] - Callback function when the button is clicked.
 */

type PaginationButtonProps = {
  isSelected?: boolean
  onClick?: () => void
} & ComponentPropsWithoutRef<'button'>

/**
 * A custom PaginationButton component.
 * @param {PaginationButtonProps} props - The props for the PaginationButton component.
 * @returns {JSX.Element} - The rendered PaginationButton component.
 */

const PaginationButton = ({
  children,
  isSelected,
  className,
  onClick,
  ...rest
}: PaginationButtonProps) => {
  const classNames = {
    btn: clsx(styles.btn, isSelected && styles.selected, className),
  } as const

  return (
    <button className={clsx(classNames.btn)} onClick={onClick} type={'button'} {...rest}>
      {children}
    </button>
  )
}

/**
 * Props for the SelectContainer component.
 * @typedef {Object} SelectContainerProps
 * @property {ReactNode} children - The child elements of the select container.
 * @property {string[]} content - The content to display before and after the children.
 */

type SelectContainerProps = {
  children: ReactNode
  content: string[]
} & ComponentPropsWithoutRef<'div'>

/**
 * A custom SelectContainer component.
 * @param {SelectContainerProps} props - The props for the SelectContainer component.
 * @returns {JSX.Element} - The rendered SelectContainer component.
 */

export const SelectContainer = ({
  children,
  content,
  className,
  ...rest
}: SelectContainerProps) => {
  const classNames = {
    select: clsx(styles.select, className),
  }

  return (
    <div className={classNames.select} {...rest}>
      <Typography as={'span'} variant={'text14'}>
        {content[0] || ''}
      </Typography>
      <div>{children}</div>
      <Typography as={'span'} variant={'text14'}>
        {content[1] || ''}
      </Typography>
    </div>
  )
}
