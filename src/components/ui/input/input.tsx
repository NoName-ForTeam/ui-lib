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
 * @example
 *  <Input
 *         placeholder={'Password'}
 *         variant={'password'}
 *         label={'Enter Password'}
 *         errorMessage={'Invalid password'}
 *         value={value}
 *         onChange={e => setValue(e.target.value)}
 *       />
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
      icon: styles.icon,
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
                <EyeOutline className={classNames.icon} />
              ) : (
                <EyeOffOutline className={classNames.icon} />
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
