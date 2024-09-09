import React, { useCallback, useEffect, useState } from 'react'
import DatePicker, { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'
import styles from './datePicker.module.scss'
import { ArrowIosBackOutline, ArrowIosForwardOutline, Calendar } from '@/assets'
import { enUS } from 'date-fns/locale'
import clsx from 'clsx'
import { parse } from 'date-fns'

export type DatePickerType = {
  errorMessage?: string
  label?: string
  disabled?: boolean
  required?: boolean
  /**
   * Whether to select a date range or a single date.
   */
  selectsRange?: boolean
  placeholder?: string
  /**
   * The start date for the selected range.
   */
  startDate?: Date | null
  /**
   * The end date for the selected range.
   */
  endDate?: Date | null
  setStartDate?: (date: Date | null) => void
  setEndDate?: (date: Date | null) => void
  onBlur?: () => void
  date?: Date | null
  onSelect?: (date: Date | null) => void
  inputRef?: React.RefCallback<HTMLInputElement>
}
registerLocale('enUS', enUS)

/**
 * A customizable date picker component that allows users to select single or range dates.
 * It uses `react-datepicker` and provides additional styling and functionality.
 *
 * @component
 * @example
 * <CustomDatePicker
 *   label="Select a date"
 *   selectsRange
 *   startDate={startDate}
 *   endDate={endDate}
 *   setStartDate={setStartDate}
 *   setEndDate={setEndDate}
 *   placeholder="Select a date range"
 *   required
 * />
 */

export const CustomDatePicker = ({
  errorMessage,
  label,
  disabled,
  required,
  setEndDate,
  endDate,
  startDate,
  setStartDate,
  selectsRange = false,
  placeholder,
  inputRef,
  ...restProps
}: DatePickerType) => {
  const showError = !!errorMessage && errorMessage.length > 0

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    locale = 'en',
  }: ReactDatePickerCustomHeaderProps & { locale?: string }) => {
    return (
      <div className={styles.header}>
        <span>{date.toLocaleString(locale, { month: 'long', year: 'numeric' })}</span>
        <div className={styles.buttonBox}>
          <button className={styles.button} onClick={decreaseMonth} type="button">
            <ArrowIosBackOutline />
          </button>
          <button className={styles.button} onClick={increaseMonth} type="button">
            <ArrowIosForwardOutline />
          </button>
        </div>
      </div>
    )
  }

  const formatSelectedDate = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate?.(start)
      setEndDate?.(end)
    } else {
      setStartDate?.(dates)
      setEndDate?.(null)
    }
  }

  const getInputValue = useCallback(() => {
    const formatDate = (date: Date | null | undefined) => {
      return date ? new Intl.DateTimeFormat('en-GB').format(date) : ''
    }
    if (selectsRange && startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`
    }
    return formatDate(startDate)
  }, [selectsRange, startDate, endDate])

  const [inputValue, setInputValue] = useState<string>(getInputValue())

  useEffect(() => {
    setInputValue(getInputValue())
  }, [getInputValue])
  const isRange = endDate !== undefined

  return (
    <div className={styles.root}>
      <DatePicker
        // @ts-expect-error toDo picker fix
        selectsRange={isRange}
        selected={startDate}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        selectsMultiple={undefined}
        locale={'enUS'}
        placeholderText={placeholder}
        onChange={formatSelectedDate}
        dateFormat="dd/MM/yyyy"
        renderCustomHeader={renderCustomHeader}
        popperPlacement="bottom-start"
        showPopperArrow={false}
        calendarClassName={styles.calendar}
        dayClassName={(): string => styles.day || ''}
        required={required}
        disabled={disabled}
        customInput={
          <div className={clsx(styles.inputContainer)}>
            {label && (
              <label className={styles.label}>
                {label} {required && <span className={styles.required}>*</span>}
              </label>
            )}
            <input
              ref={inputRef}
              className={clsx(styles.input, { [styles.error as string]: showError })}
              type="text"
              value={inputValue}
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              onChange={e => setInputValue(e.target.value)}
              onBlur={e => {
                const newValue = e.target.value
                const parsedDate = parse(newValue, 'dd/MM/yyyy', new Date())
                if (!isNaN(parsedDate.getTime())) {
                  setStartDate?.(parsedDate)
                  setEndDate?.(parsedDate)
                } else {
                  setInputValue('')
                }
              }}
            />
            <Calendar className={clsx(styles.icon, { [styles.error as string]: showError })} />
          </div>
        }
        {...restProps}
      />
      {showError && <p className={clsx(styles.errorText)}>{errorMessage}</p>}
    </div>
  )
}
