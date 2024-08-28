import clsx from 'clsx'

import styles from './input.module.scss'
import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { EyeOutline, EyeOffOutline, SearchOutline } from '@/assets'
import { Typography } from '@/components'

export type InputProps = {
  errorMessage?: string
  label?: string
  variant?: 'text' | 'password' | 'search'
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

/**
 * Input component with optional search and password toggle functionality.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.errorMessage] - Error message displayed below the input field.
 * @param {string} [props.label] - Label text for the input field.
 * @param {boolean} [props.search] - If true, a search icon is displayed inside the input field.
 */

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    {
      label,
      variant = 'text',
      errorMessage,
      className,
      onChange,
      onValueChange,
      disabled,
      value,
      placeholder,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = variant === 'password'
    const changedType = isPassword && !showPassword ? 'password' : 'text'
    const isSearch = variant === 'search'

    const classNames = {
      wrapper: styles.wrapper,
      label: clsx(styles.label, disabled && styles.disabledLabel),
      container: styles.container,
      input: clsx(
        styles.input,
        errorMessage && styles.error,
        isSearch && styles.search,
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
      onValueChange?.(e.target.value)
    }

    const showPasswordHandler = () => {
      setShowPassword(prev => !prev)
    }

    return (
      <div className={classNames.wrapper}>
        {label && (
          <Typography className={classNames.label} variant="text14">
            {label}
          </Typography>
        )}
        <div className={classNames.container}>
          {isSearch && <SearchOutline height={24} width={24} className={classNames.search} />}
          <input
            className={classNames.input}
            onChange={onChangeHandler}
            placeholder={placeholder}
            type={changedType}
            value={value}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
          {isPassword && (
            <button
              className={classNames.eyeBtn}
              disabled={disabled}
              onClick={showPasswordHandler}
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
  }
)
