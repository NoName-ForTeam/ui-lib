import clsx from 'clsx'

import styles from './sidebars.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type SidebarsProps = ComponentPropsWithoutRef<'div'>

/* Sidebars component render a customizable sidebar container.
 *@example
 * <Sidebars>
 * <SidebarsElement>
 * This is a customizable sidebar element.
 * </SidebarsElement>
 * <SidebarsElement disabled={isDisabled}>
 * This sidebar element is disabled.
 * </SidebarsElement>
 * </Sidebars>
 */

export const Sidebars = forwardRef<ElementRef<'div'>, SidebarsProps>(
  ({ children, className, ...rest }: SidebarsProps, ref) => {
    const classNames = {
      root: clsx(styles.root, className),
    } as const

    return (
      <div className={classNames.root} {...rest} ref={ref}>
        {children}
      </div>
    )
  }
)

type SidebarsElementProps = { disabled?: boolean } & ComponentPropsWithoutRef<'div'>

export const SidebarsElement = forwardRef<ElementRef<'div'>, SidebarsElementProps>(
  ({ children, className, disabled, ...rest }, ref) => {
    const classNames = {
      element: clsx(styles.element, disabled && styles.disabled, className),
    } as const
    return (
      <div className={classNames.element} {...rest} ref={ref}>
        {children}
      </div>
    )
  }
)

Sidebars.displayName = 'Sidebars'
SidebarsElement.displayName = 'SidebarsElement'
