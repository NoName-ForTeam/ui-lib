import clsx from 'clsx'

import styles from './input.module.scss'
import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { EyeOutline, EyeOffOutline, SearchOutline } from '@/assets'
import { Typography } from '@/components'

export type InputProps = {
  className?: string
  errorMessage?: string
  label?: string
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

/**
 * Input component with optional search and password toggle functionality.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional class name for styling the component.
 * @param {string} [props.errorMessage] - Error message displayed below the input field.
 * @param {string} [props.label] - Label text for the input field.
 * @param {boolean} [props.search] - If true, a search icon is displayed inside the input field.
 * @param {boolean} [props.disabled] - If true, the input field is disabled.
 * @param {string} [props.type] - The type of the input field (e.g., 'text' or 'password').
 * @param {string | number} [props.value] - The current value of the input field.
 * @param {function(ChangeEvent<HTMLInputElement>): void} [props.onChange] - Callback function invoked when the input value changes.
 * @param {React.Ref<HTMLInputElement>} ref - Reference to the input element.
 * @returns {JSX.Element} The Input component.
 */

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
  const { label, search, errorMessage, className, onChange, disabled, value, type, ...rest } = props
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const changeType = isPassword && !showPassword ? 'password' : 'text'

  const classNames = {
    wrapper: styles.wrapper,
    label: clsx(styles.label, disabled && styles.disabledLabel),
    container: styles.container,
    input: clsx(
      styles.input,
      errorMessage && styles.error,
      search && styles.search,
      isPassword && styles.password,
      className
    ),
    eyeBtn: styles.eyeButton,
    search: clsx(
      styles.searchIcon,
      disabled && styles.disabledSearch,
      errorMessage && styles.errorSearch
    ),
  } as const

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  return (
    <div className={classNames.wrapper}>
      {label && (
        <Typography className={classNames.label} variant="text14">
          {label}
        </Typography>
      )}
      <div className={classNames.container}>
        {search && <SearchOutline height={24} width={24} className={classNames.search} />}
        <input
          className={classNames.input}
          onChange={onChangeHandler}
          type={changeType}
          value={value}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        {isPassword && (
          <button
            className={classNames.eyeBtn}
            disabled={disabled}
            onClick={() => setShowPassword(showPassword => !showPassword)}
            type={'button'}
          >
            {showPassword ? (
              <EyeOffOutline height={24} width={24} />
            ) : (
              <EyeOutline height={24} width={24} />
            )}
          </button>
        )}
      </div>
      {errorMessage && (
        <Typography variant="text14" color={'var(--danger-500)'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
