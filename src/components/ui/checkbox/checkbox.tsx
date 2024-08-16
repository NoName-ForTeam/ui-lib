import { ElementRef, forwardRef, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import styles from './Checkbox.module.scss'
import { CheckmarkOutline } from '@/assets'

type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string | null
  onChange?: (checked: boolean) => void
}

/**
 * Checkbox component
 *
 * @param {CheckboxProps} props - The props for the Checkbox component
 * @param {boolean} [props.checked] - The checked state of the checkbox
 * @param {string} [props.className] - Additional CSS classes to apply to the container
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {string} [props.id] - The unique identifier for the checkbox
 * @param {string} [props.label] - The label text for the checkbox
 * @param {(checked: boolean) => void} [props.onChange] - The callback function to be called when the checkbox state changes
 * @returns {JSX.Element} - The Checkbox component
 */

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, disabled, id, label, onChange }: CheckboxProps, ref) => {
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
          >
            <CheckboxRadix.Indicator className={clsx(classNames.indicator)} forceMount>
              {checked && <CheckmarkOutline className={classNames.icon} />}
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
