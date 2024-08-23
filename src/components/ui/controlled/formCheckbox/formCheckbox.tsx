import { Checkbox, CheckboxProps } from '@/components'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type FormCheckboxProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<CheckboxProps, 'onBlur' | 'onChange' | 'value'>

export const FormCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: FormCheckboxProps<TFieldValues>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      checked={value}
      onBlur={onBlur}
      onCheckedChange={onChange}
      ref={ref}
      {...checkboxProps}
    />
  )
}
