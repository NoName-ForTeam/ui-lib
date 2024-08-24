import * as SelectRadix from '@radix-ui/react-select'
import styles from './select.module.scss'
import { ArrowIosDownOutline } from '@/assets'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

type SelectProps = {
  label?: string
  className?: string
  placeholder?: string
  pagination?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>((props, ref) => {
  const {
    onValueChange,
    value,
    pagination,
    children,
    className,
    label,
    disabled,
    placeholder,
    ...rest
  } = props

  const classNames = {
    trigger: clsx(
      styles.trigger,
      disabled && styles.triggerDisabled,
      pagination && styles.pagination,
      !label?.length && styles.withoutLabel
    ),
    icon: clsx(styles.icon, disabled && styles.iconDisabled),
    content: styles.content,
    label: clsx(styles.label, className),
  } as const

  return (
    <label className={classNames.label}>
      <SelectRadix.Root disabled={disabled} onValueChange={onValueChange} value={value} {...rest}>
        {label}
        <SelectRadix.Trigger ref={ref} className={classNames.trigger}>
          <SelectRadix.Value placeholder={placeholder ?? '...'} />
          <SelectRadix.Icon asChild>
            <ArrowIosDownOutline className={classNames.icon} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content position={'popper'} className={classNames.content}>
            <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </label>
  )
})

type SelectItemProps = {
  className?: string
  pagination?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Item>, SelectItemProps>(
  (props, ref) => {
    const { className, pagination, children, ...rest } = props
    const classNames = {
      item: clsx(styles.item, pagination && styles.pagination, className),
    } as const
    return (
      <SelectRadix.Item className={classNames.item} ref={ref} {...rest}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
