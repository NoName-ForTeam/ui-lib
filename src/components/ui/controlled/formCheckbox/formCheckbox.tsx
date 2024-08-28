import { Checkbox, CheckboxProps } from '@/components'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

/**
 * FormCheckbox component that integrates with react-hook-form to manage the state of a checkbox input.
 * It wraps the Checkbox component and connects it to the react-hook-form's control object.
 *
 * @example
 * function MyForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <form>
 *       <FormCheckbox
 *         name="acceptTerms"
 *         control={control}
 *         defaultValue={false}
 *         label="I accept the terms and conditions"
 *       />
 *     </form>
 *   );
 * }
 *
 * @param {import('react-hook-form').Control<TFieldValues>} props.control - The control object from react-hook-form used to manage form state.
 * @param {Omit<CheckboxProps, 'onBlur' | 'onChange' | 'value'>} [props.checkboxProps] - Additional props passed to the Checkbox component.
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
