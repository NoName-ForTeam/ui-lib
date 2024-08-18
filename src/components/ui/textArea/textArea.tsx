import clsx from 'clsx'

import styles from './textArea.module.scss'

export type TextAreaProps = {}

export const TextArea = ({}: TextAreaProps) => {
  const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root)}></div>
}
