import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'

type CardProps = ComponentPropsWithoutRef<'div'>

/**
 * A flexible and reusable card component that wraps its children
 * in a styled `div` element. The card can be customized with additional
 * CSS classes and all standard `div` element props.
 *
 * @example
 * // Basic usage:
 * <Cards>
 *   <p>Card Content</p>
 * </Cards>
 *
 * @example
 * // With additional class names:
 * <Cards className="custom-class">
 *   <p>Card Content with custom styling</p>
 * </Cards>
 */

export const Card = forwardRef<ElementRef<'div'>, CardProps>(
  ({ children, className, ...rest }: CardProps, ref) => {
    const classNames = clsx(styles.card, className)

    return (
      <div ref={ref} {...rest} className={classNames}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
