import clsx from 'clsx'

import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'
import styles from './textArea.module.scss'

/**
 * Props for the TextArea component.
 *
 * @typedef {Object} TextAreaProps
 * @property {string} [label] - The label for the textarea.
 * @property {string} [error] - Error message to display below the textarea.
 * @property {string} [placeholder] - Placeholder text inside the textarea.
 * @property {boolean} [disabled] - Whether the textarea is disabled.
 */

export type TextAreaProps = {
  label?: string
  error?: string
} & ComponentPropsWithoutRef<'textarea'>

/**
 * A forward-ref TextArea component that supports labels, error messages, and various props.
 *
 * @param {TextAreaProps} props - The props for the TextArea component.
 * @param {React.Ref<HTMLTextAreaElement>} ref - A forwarded ref to the textarea element.
 * @returns {JSX.Element} The rendered TextArea component.
 */

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, id, error, placeholder = '', disabled, ...rest }, ref) => {
    const innerId = useId()
    const finalId = id ?? innerId
    const errorId = `${finalId}-error`
    const classNames = {
      root: styles.root,
      error: styles.error,
      textarea: clsx(styles.textarea, error && styles.error),
      label: clsx(styles.label, disabled && styles.disabled),
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
