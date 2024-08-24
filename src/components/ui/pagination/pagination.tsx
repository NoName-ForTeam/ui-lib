import clsx from 'clsx'

import styles from './pagination.module.scss'
import { ComponentPropsWithoutRef } from 'react'

export type PaginationProps = ComponentPropsWithoutRef<'div'>
export const Pagination = ({ className }: PaginationProps) => {
  const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root, className)}></div>
}
