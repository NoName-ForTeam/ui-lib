import { RadioGroup } from '@/components'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

/**
 * Props for the FormRadioGroup component.
 *
 * @template TFieldValues - The type of field values managed by react-hook-form.
 * @extends {UseControllerProps<TFieldValues>} - Inherits controller props from react-hook-form.
 * @extends {Omit<RadioGroupProps, 'onBlur' | 'onChange' | 'value'>} - Omitted props from Radix UI RadioGroup.
 */
export type FormRadioGroupProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<RadioGroupProps, 'onBlur' | 'onChange' | 'value'>

/**
 * A controlled radio group component that integrates with react-hook-form.
 *
 * This component allows you to create a group of radio buttons that can be controlled
 * through react-hook-form's controller.
 *
 * @example
 * <FormRadioGroup control={control} name={"radioOption"} defaultValue={"option1"} disabled={'false'}>
 *   <RadioGroupItem value="option1" />
 *   <RadioGroupItem value="option2" />
 *   <RadioGroupItem value="option3" />
 * </FormRadioGroup>
 */
export const FormRadioGroup = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  disabled,
  children,
  ...restProps
}: FormRadioGroupProps<TFieldValues>) => {
  const {
    field: { onChange, ...restField },
  } = useController({
    control,
    name,
    defaultValue,
    disabled,
  })

  return (
    <RadioGroup {...restProps} {...restField} onValueChange={onChange}>
      {children}
    </RadioGroup>
  )
}
