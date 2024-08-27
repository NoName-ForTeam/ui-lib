import React, { useCallback, useEffect, useState } from 'react'
import DatePicker, { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'
import styles from './datePicker.module.scss'
import { ArrowIosBackOutline, ArrowIosForwardOutline, Calendar } from '@/assets'
import { enUS } from 'date-fns/locale'
import clsx from 'clsx'
import { parse } from 'date-fns'

/**
 * A customizable date picker component that allows users to select single or range dates.
 * It uses `react-datepicker` and provides additional styling and functionality.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.errorMessage] - Error message to be displayed when there's an issue with the date selection.
 * @param {string} [props.label] - Label text to be displayed above the input field.
 * @param {boolean} [props.disabled=false] - Whether the date picker is disabled.
 * @param {boolean} [props.required=false] - Whether the date picker is required.
 * @param {boolean} [props.selectsRange=false] - Whether to select a date range or a single date.
 * @param {string} [props.placeholder] - Placeholder text for the input field.
 * @param {Date|null} [props.startDate] - The start date for the selected range.
 * @param {Date|null} [props.endDate] - The end date for the selected range.
 * @param {(date: Date | null) => void} [props.setStartDate] - Callback function to set the start date.
 * @param {(date: Date | null) => void} [props.setEndDate] - Callback function to set the end date.
 * @returns {JSX.Element} The CustomDatePicker component.
 */

type DatePickerType = {
  errorMessage?: string
  label?: string
  disabled?: boolean
  required?: boolean
  selectsRange?: boolean
  placeholder?: string
  startDate?: Date | null
  endDate?: Date | null
  setStartDate?: (date: Date | null) => void
  setEndDate?: (date: Date | null) => void
}
registerLocale('enUS', enUS)

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

  return (
    <div className={styles.root}>
      <DatePicker
        selectsRange
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
        //{...(selectsRange ? { selectsRange: true } : {})}
        //toDo selectRange for single date

        {...restProps}
      />
      {showError && <p className={clsx(styles.errorText)}>{errorMessage}</p>}
    </div>
  )
}
