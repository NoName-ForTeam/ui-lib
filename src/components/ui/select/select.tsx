import * as SelectRadix from '@radix-ui/react-select'
import styles from './select.module.scss'
import Icon from '../../../assets/icons/components/ArrowIosDownOutline.tsx'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

export type Option = {
  value: string
  content: ReactNode | string
}

type SelectProps = {
  label?: string
  className?: string
  options: Option[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>((props, ref) => {
  const { onValueChange, options, value, className, label, disabled, placeholder, ...rest } = props

  return (
    <SelectRadix.Root onValueChange={onValueChange} value={value} {...rest}>
      <div className={styles.container}>
        <label className={clsx(styles.label, className)}>
          {label}
          <SelectRadix.Trigger
            ref={ref}
            className={clsx(
              styles.trigger,
              !label?.length && styles.withoutLabel,
              disabled && styles.disabled
            )}
          >
            <SelectRadix.Value placeholder={placeholder ?? '...'} />
            <SelectRadix.Icon asChild>
              <Icon className={styles.icon} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>
        </label>
      </div>
      <SelectRadix.Portal>
        <SelectRadix.Content position={'popper'} className={styles.content}>
          <SelectRadix.Viewport>
            {options.map(option => (
              <SelectRadix.Item className={styles.item} key={option.value} value={option.value}>
                <SelectRadix.ItemText>{option.content}</SelectRadix.ItemText>
              </SelectRadix.Item>
            ))}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
})
