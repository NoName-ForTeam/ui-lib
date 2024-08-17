import * as SelectRadix from '@radix-ui/react-select'
import styles from './select.module.scss'
import {ArrowIosDownOutline} from '@/assets'
import clsx from 'clsx'
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

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
        !label?.length && styles.withoutLabel,
        disabled && styles.disabled,
        pagination && styles.paginationTrigger
    ),
    icon: styles.icon,
    content: clsx(
        styles.content,
        pagination && styles.paginationContent
    )
  } as const

  return (
    <SelectRadix.Root disabled={disabled} onValueChange={onValueChange} value={value} {...rest}>
      <div className={styles.container}>
        <label className={clsx(styles.label, className)}>
          {label}
          <SelectRadix.Trigger
            ref={ref}
            className={classNames.trigger}
          >
            <SelectRadix.Value placeholder={placeholder ?? '...'} />
            <SelectRadix.Icon asChild>
              <ArrowIosDownOutline className={classNames.icon} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>
        </label>
      </div>
      <SelectRadix.Portal>
        <SelectRadix.Content position={'popper'} className={classNames.content}>
          <SelectRadix.Viewport>
            {children}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
})

type SelectItemProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Item>, SelectItemProps>((props, ref) => {
  const {className, children, ...rest} = props;
  return (
      <SelectRadix.Item className={clsx(styles.item, className)} ref={ref} {...rest}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
  )
})
