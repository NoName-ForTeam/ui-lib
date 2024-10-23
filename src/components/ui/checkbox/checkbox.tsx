import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import styles from './checkbox.module.scss'
import { CheckmarkOutline } from '@/assets'

export type CheckboxProps = {
  label?: string | null

  onChange?: (checked: CheckboxRadix.CheckedState) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

/**
 * The Checkbox component is a custom checkbox component built using Radix UI.
 * It provides a flexible and customizable checkbox that can be easily integrated into any React application.
 * The component supports various props to control its behavior and appearance,
 * including checked, disabled, id, label, and onChange.
 * @component
 * @example
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 *   label={'Accept Terms and Conditions'}
 *   id={'terms-checkbox'}
 *   disabled={false}
 * />
 */

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, disabled, id, label, onChange, ...rest }, ref) => {
    const innerId = useId()
    const finalId = id ?? innerId
    const classNames = {
      container: styles.container,
      indicator: styles.indicator,
      label: clsx(styles.label, disabled && styles.disabled),
      root: clsx(styles.root, disabled && styles.disabled),
      wrapper: clsx(styles.wrapper, disabled && styles.disabled),
      icon: clsx(styles.icon, disabled && styles.disabled),
    }

    return (
      <div className={clsx(classNames.container)}>
        <div className={clsx(classNames.wrapper)}>
          <CheckboxRadix.Root
            checked={checked}
            className={clsx(classNames.root)}
            disabled={disabled}
            id={finalId}
            onCheckedChange={onChange}
            ref={ref}
            {...rest}
          >
            <CheckboxRadix.Indicator className={clsx(classNames.indicator)} forceMount>
              {(checked === true || checked === 'indeterminate') && (
                <CheckmarkOutline className={classNames.icon} />
              )}
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label && (
          <label htmlFor={finalId} className={classNames.label}>
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
