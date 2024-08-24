import clsx from 'clsx'

import styles from './radioGroup.module.scss'
import { ComponentPropsWithoutRef } from 'react'

export type RadioGroupProps = ComponentPropsWithoutRef<'div'>
export const RadioGroup = ({ className }: RadioGroupProps) => {
  const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root, className)}></div>
}
