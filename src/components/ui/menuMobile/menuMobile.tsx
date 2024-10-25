import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import styles from './menuMobile.module.scss'
import clsx from 'clsx'

type MenuMobileProps = ComponentPropsWithRef<'div'>

export const MenuMobile = forwardRef<ElementRef<'div'>, MenuMobileProps>(
  ({ children, className }, ref, ...rest) => {
    const classNames = {
      menuMobileContainer: clsx(styles.menuMobileContainer, className),
    }

    return (
      <div className={classNames.menuMobileContainer} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)
