import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components'

/**
 * FormInput component that integrates with react-hook-form to manage form state.
 * It wraps the Input component and connects it to the react-hook-form's control object.
 *
 * @component
 * @template TFieldValues
 * @param {Object} props - The component props.
 * @param {import('react-hook-form').Control<TFieldValues>} props.control - The control object from react-hook-form used to manage the form state.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} [props.label] - Label text for the input field.
 * @param {any} [props.defaultValue] - The default value for the input field.
 * @param {Omit<InputProps, 'onBlur' | 'onChange' | 'value'>} [props.restInputProps] - Additional props passed to the Input component.
 * @returns {JSX.Element} The FormInput component.
 */

export type FormInputProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<InputProps, 'onBlur' | 'onChange' | 'value'>

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  label,
  name,
  ...restInputProps
}: FormInputProps<TFieldValues>) => {
  const {
    field: { onBlur, onChange, value = defaultValue ?? '' },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Input
      {...restInputProps}
      defaultValue={defaultValue}
      errorMessage={error?.message}
      label={label}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
    />
  )
}
