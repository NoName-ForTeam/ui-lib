
  import clsx from 'clsx'

  import styles from './sidebars.module.scss'

  export type SidebarsProps = {}

  export const Sidebars = ({}:SidebarsProps) => {
   const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root)}></div>
  }
  