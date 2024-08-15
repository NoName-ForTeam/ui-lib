import clsx from 'clsx'

import styles from './checkbox.module.scss'

export type CheckboxProps = {}

export const Checkbox = ({}: CheckboxProps) => {
  const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root)}></div>
}
