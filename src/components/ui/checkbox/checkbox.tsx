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
 * Custom checkbox component using Radix UI
 *
 * @component
 * @param {Object} props - The component props
 * @param {CheckboxRadix.CheckedState} [props.checked] - The checked state of the checkbox
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {string} [props.id] - The id for the checkbox input
 * @param {string|null} [props.label] - The label text for the checkbox
 * @param {(checked: CheckboxRadix.CheckedState) => void} [props.onChange] - Callback function when the checkbox state changes
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to the underlying button element
 * @returns {JSX.Element} The Checkbox component
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

/**
 *This will help when debugging in React DevTools.
 **/

Checkbox.displayName = 'Checkbox'
