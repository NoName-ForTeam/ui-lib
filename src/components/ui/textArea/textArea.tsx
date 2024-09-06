import clsx from 'clsx'

import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'
import styles from './textArea.module.scss'

export type TextAreaProps = {
  /**
   * The label text to be displayed above the textarea.
   */
  label?: string
  /**
   * Error message to be displayed below the textarea.
   */
  error?: string
  /**
   * Callback function that is called when the textarea's value changes.
   * It receives the new value as a string parameter.
   * @param value - The current value of the textarea
   */
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'textarea'>

/**
 * A customizable textarea component with support for labels and error messages.
 *
 * @component
 * @example
 **Basic usage
 * <TextArea
 *   label="Description"
 *   placeholder="Enter your description here"
 *   onChange={(e) => console.log(e.target.value)}
 * />
 *
 ** With error message and disabled state
 * <TextArea
 *   label="Feedback"
 *   error="Please provide your feedback"
 *   value={feedback}
 *   disabled={true}
 *   onChange={(e) => setFeedback(e.target.value)}
 * />
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, id, error, placeholder = '', disabled, onChangeValue, ...rest }, ref) => {
    const innerId = useId()
    const finalId = id ?? innerId
    const errorId = `${finalId}-error`
    const classNames = {
      root: styles.root,
      error: styles.error,
      textarea: clsx(styles.textarea, error && styles.error),
      label: clsx(styles.label, disabled && styles.disabled),
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChangeValue?.(e.target.value)
    }
    return (
      <div className={classNames.root}>
        {label && (
          <label className={classNames.label} htmlFor={finalId}>
            {label}
          </label>
        )}
        <textarea
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={error ? errorId : undefined}
          id={finalId}
          className={clsx(classNames.textarea, className)}
          ref={ref}
          onChange={handleChange}
          {...rest}
        />
        {error && (
          <div className={classNames.error} id={errorId}>
            {error}
          </div>
        )}
      </div>
    )
  }
)
TextArea.displayName = 'Textarea'
