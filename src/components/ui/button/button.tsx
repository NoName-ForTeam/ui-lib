import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styles from './button.module.scss'

/**
 * Props for the Button component
 * @typedef {Object} ButtonProps
 * @property {boolean} [asChild] - If true, the component will render its children directly
 * @property {'primary' | 'secondary' | 'outlined' | 'ghost' | 'link'} [variant='primary'] - The visual style variant of the button
 * @property {boolean} [fullWidth] - If true, the button will take up the full width of its container
 */

type ButtonProps = {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'outlined' | 'link' | 'ghost'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

/**
 * A customizable button component with various style variants
 * @param {ButtonProps} props - The props for the Button component
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to be forwarded to the button element
 * @returns {React.ReactElement} A Button component
 */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, fullWidth, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const classNames = {
      button: clsx(styles[variant], fullWidth && styles.fullWidth, className),
    } as const
    return <Comp className={classNames.button} ref={ref} {...rest} />
  }
)
Button.displayName = 'Button'
