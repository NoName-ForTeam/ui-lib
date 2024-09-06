import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styles from './button.module.scss'

export type ButtonProps = {
  /**
   * If true, the component will render its children directly without wrapping them in a button element.
   * This is useful when you want to use the button styles on a different element, like an anchor tag.
   * @default false
   */
  asChild?: boolean
  /**
   * - 'outlined': Button with outline and transparent background
   * - 'link': Button that looks like a hyperlink
   * - 'ghost': Button with minimal visual style
   * - 'icon-link': Button styled as a link with an icon
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outlined' | 'link' | 'ghost' | 'icon-link'
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

/**
 * A customizable button component with various style variants
 * @component
 * @example
 *Primary button
 * <Button onClick={() => console.log('Clicked!')}>Click me</Button>
 *
 * @example
 *Secondary full-width button
 * <Button variant="secondary" fullWidth>Full Width Button</Button>
 *
 * @example
 *Outlined disabled button
 * <Button variant="outlined" disabled>Disabled Button</Button>
 *
 * @example
 *Ghost button
 * <Button variant="ghost">Ghost Button</Button>
 *
 * @example
 *Link button
 * <Button variant="link" asChild>
 *   <a href="https://example.com">Link Button</a>
 * </Button>
 *
 * @example
 *Icon-link button
 * <Button variant="icon-link" asChild>
 *  <Link href={'#'} passHref><GoogleSvgrepoCom1/></Link>
 * </Button>
 */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, fullWidth, disabled, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const classNames = {
      button: clsx(
        styles[variant],
        fullWidth && styles.fullWidth,
        className,
        disabled && styles.disabled
      ),
    } as const
    return (
      <Comp
        className={classNames.button}
        ref={ref}
        /**
         * @remarks
         * When `asChild` is true, it uses `aria-disabled` for better accessibility with custom elements.
         * When `asChild` is false, it uses the standard `disabled` attribute.
         */
        {...(asChild
          ? { 'aria-disabled': disabled || undefined }
          : { disabled: disabled || undefined })}
        {...rest}
      />
    )
  }
)
Button.displayName = 'Button'
