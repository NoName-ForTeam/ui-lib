import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import styles from './mobileMenu.module.scss'
import clsx from 'clsx'

type HeaderMobileMenuProps = ComponentPropsWithRef<'div'>

export const MobileMenu = forwardRef<ElementRef<'div'>, HeaderMobileMenuProps>(
  ({ children, className }, ref, ...rest) => {
    const classNames = {
      headerContainer: clsx(styles.headerMobileMenuContainer, className),
    }

    return (
      <div className={classNames.headerContainer} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)
