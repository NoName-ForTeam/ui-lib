import clsx from 'clsx'

import styles from './recaptcha.module.scss'
import { ComponentPropsWithoutRef } from 'react'

export type RecaptchaProps = ComponentPropsWithoutRef<'div'>
export const Recaptcha = ({ className }: RecaptchaProps) => {
  const classNames = {
    root: styles.root,
  } as const

  return <div className={clsx(classNames.root, className)}></div>
}
