import { TextArea, TextAreaProps } from '@/components'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

/**
 * @param {import('react-hook-form').Control<TFieldValues>} props.control - The control object from react-hook-form used to manage form state.
 */
export type FormTextAreaProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  /**
   * @param {Omit<TextAreaProps, 'onBlur' | 'onChange' | 'value'>} [props.textAreaProps] - Additional props passed to the TextArea component.
   */
  Omit<TextAreaProps, 'onBlur' | 'onChange' | 'value'>

/**
 * FormTextArea component that integrates with react-hook-form to manage the state of a textarea input.
 * It wraps the TextArea component and connects it to the react-hook-form's control object.
 *  @param {boolean} [props.shouldUnregister] - If true, the input will be unregistered from the form when the component unmounts.
 *This is useful for dynamic forms where fields can be added or removed. Default is false.
 *@component
 * @example
 * function MyForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <form>
 *       <FormTextArea
 *         name="description"
 *         control={control}
 *         label="Description"
 *         defaultValue=""
 *       />
 *     </form>
 *   )
 * }
 */

export const FormTextArea = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  shouldUnregister,
  ...textAreaProps
}: FormTextAreaProps<TFieldValues>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
    shouldUnregister,
  })

  return (
    <TextArea
      {...textAreaProps}
      defaultValue={defaultValue}
      onBlur={onBlur}
      onChangeValue={onChange}
      ref={ref}
      value={value}
    />
  )
}
