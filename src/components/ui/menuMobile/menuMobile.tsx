import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import styles from './menuMobile.module.scss'
import clsx from 'clsx'

/**
 * MenuMobile component
 * is a reusable container component for mobile navigation menus.
 *
 * @example
 * <MenuMobile>
 *   <HomeOutline width={24} height={24} />
 *   <PlusSquareOutline width={24} height={24} />
 *   <MessageCircleOutline width={24} height={24} />
 *   <Search width={24} height={24} />
 *   <PersonOutline width={24} height={24} />
 * </MenuMobile>
 */
export const MenuMobile = forwardRef<ElementRef<'div'>, ComponentPropsWithRef<'div'>>(
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
MenuMobile.displayName = 'MenuMobile'
