import { Checkbox, CheckboxProps } from '@/components'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

/**
 * FormCheckbox component that integrates with react-hook-form to manage the state of a checkbox input.
 * It wraps the Checkbox component and connects it to the react-hook-form's control object.
 *
 * @component
 * @template TFieldValues
 * @param {Object} props - The component props.
 * @param {import('react-hook-form').Control<TFieldValues>} props.control - The control object from react-hook-form used to manage form state.
 * @param {string} props.name - The name of the field in the form.
 * @param {any} [props.defaultValue] - The initial checked state of the checkbox.
 * @param {Object} [props.rules] - Validation rules for the checkbox, passed to react-hook-form.
 * @param {boolean} [props.shouldUnregister] - Determines whether the input should be unregistered when unmounted.
 * @param {Omit<CheckboxProps, 'onBlur' | 'onChange' | 'value'>} [props.checkboxProps] - Additional props passed to the Checkbox component.
 * @returns {JSX.Element} The FormCheckbox component.
 */

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
