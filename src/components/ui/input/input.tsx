import clsx from 'clsx'

import styles from './input.module.scss'
import {ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState} from "react";
import {EyeOutline, EyeOffOutline, SearchOutline} from "@/assets";

export type InputProps = {
    className?: string
    errorMessage?: string
    label?: string
    search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
    const {
        label,
        search,
        errorMessage,
        className,
        onChange,
        disabled,
        value,
        type,
        ...rest
    } = props
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const changeType = isPassword && !showPassword ? 'password' : 'text'

    const classNames = {
        wrapper: styles.wrapper,
        label: clsx(styles.label, disabled && styles.disabledLabel),
        container: styles.container,
        input: clsx(styles.input,
            errorMessage && styles.error,
            search && styles.search,
            isPassword && styles.password,
            className
        ),
        eyeBtn: styles.eyeButton,
        search: clsx(
            styles.searchIcon,
            disabled && styles.disabledSearch,
            errorMessage && styles.errorSearch,
        )
    } as const

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
    }

    return <div className={classNames.wrapper}>
        {label && (
            <label className={classNames.label}>
                {label}
            </label>
        )}
        <div className={classNames.container}>
            {search && (
                <SearchOutline height={24} width={24} className={classNames.search}/>
            )}
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
                    {showPassword ? <EyeOffOutline height={24} width={24}/> : <EyeOutline height={24} width={24}/>}
                </button>
            )}
        </div>
        {errorMessage && (
            <div>{errorMessage}</div>
        )}
    </div>
})
