
  import clsx from 'clsx'

  import styles from './button.module.scss'

  export type ButtonProps = {}

  export const Button = ({}:ButtonProps) => {
   const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root)}></div>
  }
  