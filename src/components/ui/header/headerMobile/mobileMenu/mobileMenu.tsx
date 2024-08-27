import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import styles from './mobileMenu.module.scss'
import clsx from 'clsx'

type HeaderMobileMenuProps = {
  children: React.ReactNode[]
} & ComponentPropsWithRef<'div'>

export const MobileMenu = forwardRef<ElementRef<'div'>, HeaderMobileMenuProps>(
  ({ children, className }, ref, ...rest) => {
    const classNames = {
      headerContainer: clsx(styles.headerMobileMenuContainer, className),
    }

    const menuItems = children.map((el, key) => {
      return <div key={key}>{el}</div>
    })

    return (
      <div className={classNames.headerContainer} ref={ref} {...rest}>
        {menuItems}
      </div>
    )
  }
)
