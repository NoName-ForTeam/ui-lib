import { Select, SelectProps } from '@/components'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

/**
 * @param {import('react-hook-form').Control<TFieldValues>} props.control - The control object from react-hook-form used to manage form state.
 */
export type FormSelectProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<SelectProps, 'onValueChange' | 'onChange' | 'value'>

/**
 * FormSelect component that integrates with react-hook-form to manage the state of a select input.
 * It wraps the Select component and connects it to the react-hook-form's control object.
 *
 * @example
 * function MyForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <form>
 *       <FormSelect
 *         name="country"
 *         control={control}
 *         label="Country"
 *         defaultValue=""
 *       >
 *         <SelectItem value="ru">Russia</SelectItem>
 *         <SelectItem value="us">United States</SelectItem>
 *         <SelectItem value="gb">United Kingdom</SelectItem>
 *       </FormSelect>
 *     </form>
 *   );
 * }
 */

export const FormSelect = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  ...selectProps
}: FormSelectProps<TFieldValues>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <Select {...selectProps} onValueChange={onChange} ref={ref} value={value} />
}
