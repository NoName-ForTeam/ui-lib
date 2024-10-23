import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './typography.module.scss'

type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'textLarge'
  | 'text16'
  | 'textBold16'
  | 'text14'
  | 'textMedium14'
  | 'textBold14'
  | 'textSmall'
  | 'textSmallBold'
  | 'link'
  | 'linkSmall'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  color?: string
  variant?: TypographyType
}

/**
 * The `Typography` component is a flexible and reusable component for rendering text content with predefined styles.
 * It allows you to specify the semantic HTML element (e.g., 'p', 'h1', 'span') and the desired text variant (e.g., 'textLarge', 'h1', 'link').
 *
 * @component
 * @example
 * <Typography variant={'h1'} as={'h1'} className={classNames.tutle}>Text</Typography>
 */

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  color,
  variant = 'text16',
  ...rest
}: Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>> & TypographyProps<T>) => {
  const Component = as || 'p'

  return (
    <Component
      className={clsx(styles[variant], className)}
      style={{ color, ...rest.style }}
      {...rest}
    >
      {children}
    </Component>
  )
}
Typography.displayName = 'Typography'
