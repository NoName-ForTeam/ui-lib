import clsx from 'clsx'

import styles from './sidebars.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type SidebarsProps = ComponentPropsWithoutRef<'div'>

/**
 * Sidebars component.
 * Renders a customizable sidebar container.
 *
 * @param {SidebarsProps} props - The component props.
 * @param {React.Ref<HTMLDivElement>} ref - The forwarded ref.
 * @returns {JSX.Element} The rendered Sidebars component.
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

/**
 * SidebarsElement component.
 * Renders a customizable element within the sidebar.
 *
 * @param {SidebarsElementProps} props - The component props.
 * @param {React.Ref<HTMLDivElement>} ref - The forwarded ref.
 * @returns {JSX.Element} The rendered SidebarsElement component.
 */

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

// Set display names for debugging

Sidebars.displayName = 'Sidebars'
SidebarsElement.displayName = 'SidebarsElement'
