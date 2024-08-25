import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import styles from './headerMobileMenu.module.scss'
import clsx from 'clsx'

type HeaderMobileMenuProps = {
  children: React.ReactNode[]
} & ComponentPropsWithRef<'div'>

export const HeaderMobileMenu = forwardRef<ElementRef<'div'>, HeaderMobileMenuProps>(
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
