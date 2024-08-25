import { ElementRef, forwardRef } from 'react'
import styles from './headerMobileMenu.module.scss'

type HeaderMobileMenuProps = {
  children: React.ReactNode[]
}

export const HeaderMobileMenu = forwardRef<ElementRef<'div'>, HeaderMobileMenuProps>(
  ({ children }, ref, ...rest) => {
    const classNames = {
      headerContainer: styles.headerMobileMenuContainer,
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
