import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { ArrowIosBack, ArrowIosForward } from '@/assets'
import { clsx } from 'clsx'

import styles from './pagination.module.scss'

import { Typography } from '../typography'
import { usePagination } from './usePagination'

/**
 *  A custom Pagination component.
 * Source: www.freecodecamp.org/news/*build-a-custom-pagination-component-in-react/
 * @component
 * @example
 * <PaginationComponent
 * disabledPrevBtn={currentPage === 1}
 * disabledNextBtn={currentPage === totalPages}
 * handleClickPrevBtn={() => {
 *   if (currentPage > 1) {
 *     setCurrentPage(currentPage - 1);
 *   }
 * }}
 * handleClickNextBtn={() => {
 *   if (currentPage < totalPages) {
 *     setCurrentPage(currentPage + 1);
 *   }
 * }}
 * mainButtons={Array.from({ length: totalPages }, (_, index) => (
 *   <PaginationButton
 *     key={index}
 *     onClick={() => setCurrentPage(index + 1)}
 *     disabled={currentPage === index + 1}
 *   >
 *     {index + 1}
 *   </PaginationButton>
 * ))}
 * children={<div>Additional content here</div>}
/>
 */

type PaginationProps = {
  currentPage: number
  onChangePage: (num: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & ComponentPropsWithoutRef<'div'>

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

type PaginationButtonProps = {
  isSelected?: boolean
  onClick?: () => void
} & ComponentPropsWithoutRef<'button'>

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

type SelectContainerProps = {
  children: ReactNode
  content: string[]
} & ComponentPropsWithoutRef<'div'>

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
