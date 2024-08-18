import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Typography.module.scss'

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
 * @template T - The type of the HTML element to be used for rendering.
 * @param {Object} props - The props object for the `Typography` component.
 * @param {T} [props.as] - The semantic HTML element to be used as the root element for the text content.
 * @param {ReactNode} [props.children] - The content to be rendered inside the `Typography` component.
 * @param {string} [props.className] - Additional CSS class names to be applied to the `Typography` component.
 * @param {string} [props.color] - The color to be applied to the text.
 * @param {TypographyType} [props.variant='text16'] - The predefined text variant to be applied to the `Typography` component.
 * Possible values include: 'h1', 'h2', 'h3', 'textLarge', 'text16', 'textBold16', 'text14', 'textMedium14', 'textBold14', 'textSmall', 'textSmallBold', 'link', 'linkSmall'.
 * @returns {JSX.Element} The rendered `Typography` component.
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
