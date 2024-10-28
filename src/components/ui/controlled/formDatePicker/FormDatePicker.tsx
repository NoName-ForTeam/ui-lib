import { CustomDatePicker, DatePickerType } from '@/components'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

export type FormDatePickerProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<DatePickerType, 'date'>

/**
 * A form-specific DatePicker component that integrates with React Hook Form.
 *
 * @example
 * <FormDatePicker
 *   control={control}
 *   name="startDate"
 *   rules={{ required: 'Start date is required' }}
 *   disabled={isEditing}
 * />
 */

export const FormDatePicker = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: FormDatePickerProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <CustomDatePicker
      date={value}
      errorMessage={error?.message}
      onSelect={onChange}
      onBlur={onBlur}
      inputRef={ref}
      {...rest}
    />
  )
}
