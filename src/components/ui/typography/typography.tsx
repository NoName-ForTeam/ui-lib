
  import clsx from 'clsx'

  import styles from './typography.module.scss'

  export type TypographyProps = {}

  export const Typography = ({}:TypographyProps) => {
   const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root)}></div>
  }
  