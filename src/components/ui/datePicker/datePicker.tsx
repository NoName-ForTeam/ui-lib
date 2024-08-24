import React from 'react'
import DatePicker, { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'
import styles from './datePicker.module.scss'
import { ArrowIosBackOutline, ArrowIosForwardOutline, Calendar } from '@/assets'
import { enUS } from 'date-fns/locale'
import clsx from 'clsx'

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
  selectsRange,
  placeholder,
  ...restProps
}: DatePickerType) => {
  const showError = !!errorMessage && errorMessage.length > 0
  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }: ReactDatePickerCustomHeaderProps) => (
    <div className={styles.header}>
      <span>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
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

  // const dayStyles = () => styles.day

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
  const getInputValue = () => {
    if (selectsRange && startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
    }
    return startDate ? startDate.toLocaleDateString() : ''
  }

  return (
    <div className={styles.root} {...restProps}>
      <DatePicker
        selected={startDate}
        startDate={undefined}
        endDate={undefined}
        selectsRange={true}
        // startDate={selectsRange ? startDate : undefined}
        // endDate={selectsRange ? endDate : undefined}
        // selectsRange={selectsRange}

        locale={'enUS'}
        placeholderText={placeholder}
        onChange={formatSelectedDate}
        dateFormat="dd/MM/yyyy"
        renderCustomHeader={renderCustomHeader}
        popperPlacement="bottom-start"
        showPopperArrow={false}
        calendarClassName={styles.calendar}
        // dayClassName={dayStyles}

        required={required}
        disabled={disabled}
        customInput={
          <div
            className={clsx(
              styles.inputContainer

              // { styles.error: showError }
            )}
          >
            {label && (
              <label className={styles.label}>
                {label} {required && '*'}
              </label>
            )}
            <input
              className={styles.input}
              type="text"
              value={getInputValue()}
              readOnly
              disabled={disabled}
              required={required}
              placeholder={placeholder}
            />
            <Calendar className={styles.icon} />
          </div>
        }
        {...restProps}
      />
      {showError && <p className={clsx(styles.errorText, styles.error)}>{errorMessage}</p>}
    </div>
  )
}

// import React, {ReactNode, forwardRef, ComponentProps} from 'react'
// import {ReactDatePickerCustomHeaderProps, registerLocale} from 'react-datepicker'
// import * as RDP from 'react-datepicker'
// import {format} from 'date-fns'
// import {enUS} from 'date-fns/locale'
// import clsx from 'clsx'
// import styles from './datePicker.module.scss'
// import {ArrowIosBackOutline, ArrowIosForwardOutline, Calendar} from '@/assets'
// const RDPC = (((RDP.default as any).default as any) ||
//     (RDP.default as any) ||
//     (RDP as any)) as typeof RDP.default
//
// // Регистрация локали для DatePicker
//
// registerLocale('enUS', enUS)
//
// export type DatePickerProps = {
//     disabled?: boolean
//     placeholder?: string | undefined
//     errorMessage?: string
//     label?: ReactNode
//     required?: boolean
//     className?: string
//
//     setEndDate?: (date: Date | null) => void
//     setStartDate: (date: Date | null) => void
//     startDate: Date | null
//     endDate?: Date | null
//     range?: boolean
//
// }& ComponentProps<'div'>
//
// export const DatePickerCalendar = ({
//
// range,endDate, startDate, setStartDate, setEndDate,
//
//                      errorMessage,
//                                        disabled,
//                                        label,
//                                        required,
//                                        placeholder,
//                                        ...restProps
//                                    }: DatePickerProps) => {
//
//     // Проверка на наличие ошибки
//     // const showError = !!errorMessage;
//
//     // type Nullable<T> = null | T
//     // type Value = Nullable<Date>
//     // type RangeValue = [Value, Value]
//
//
//     const showError = !!errorMessage && errorMessage.length > 0
//
//
//     // const [startDate, setStartDate] = useState<Date|null>(placeholder ? new Date(placeholder) : null)
//     // const [endDate, setEndDate] = useState<Date|null>(null)
//
//     const isRange = endDate ? true : undefined
//
//     // const placeholderDate = placeholder ? new Date(placeholder).toDateString() : undefined
//
//     const startDateCalendar = startDate || undefined
//     const endDateCalendar = endDate || undefined
//
//     // Функция для обработки изменения дат
//
//     const handleDateChange = (dates: Date | null) => {
//         if (Array.isArray(dates)) {
//             const [start, end] = dates
//             setStartDate(start)
//             setEndDate?.(end)
//         } else {
//             setStartDate(dates)
//         }
//     }
//     const classNames = {
//         calendar: styles.calendar,
//         day: () => styles.day,
//         errorText: styles.errorText,
//         input: clsx(styles.input, showError && styles.error),
//         inputContainer: styles.inputContainer,
//         root: clsx(styles.root),
//     }
//
//     return (
//         <div className={classNames.root} {...restProps}>
//             <RDPC
//                 selected={startDate}
//                 calendarStartDay={1}
//                 calendarClassName={classNames.calendar}
//                 dayClassName={classNames.day}
//                 placeholderText={placeholder}
//                 className={classNames.input}
//                 onChange={handleDateChange}
//                 startDate={range ? startDateCalendar : undefined}
//                 endDate={range ? endDateCalendar : undefined}
//                 selectsRange={isRange} // Выбор диапазона дат, если endDate определен
//                 disabled={disabled}
//                 dateFormat="dd/MM/yyyy"
//                 locale="enUS"
//                 required={required}
//                 customInput={<CustomInput disabled={disabled} label={label}/>}
//                 renderCustomHeader={CustomHeader}
//                 popperPlacement="bottom-start"
//                 showPopperArrow={false}
//             />
//             {showError && <p className={classNames.errorText}>{errorMessage}</p>}
//         </div>
//     )
// }
//
// type CustomInputProps = {
//     disabled?: boolean
//     label?: ReactNode
// }
//
// const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
//     ({disabled, label, ...rest}, ref) => {
//         const classNames = {
//             icon: clsx(styles.icon, disabled && styles.disabled),
//             inputContainer: styles.inputContainer,
//         }
//
//         return (
//             <div className={classNames.inputContainer}>
//                 <label>{label}</label>
//                 <input ref={ref} disabled={disabled} {...rest} />
//                 <Calendar className={classNames.icon}/>
//             </div>
//         )
//     }
// )
//
// const CustomHeader = ({date, decreaseMonth, increaseMonth}: ReactDatePickerCustomHeaderProps) => (
//     <div className={styles.header}>
//         <div>{format(date, 'LLLL yyyy', {locale: enUS})}</div>
//         <div className={styles.buttonBox}>
//             <button className={styles.button} onClick={decreaseMonth} type="button">
//                 <ArrowIosBackOutline/>
//             </button>
//             <button className={styles.button} onClick={increaseMonth} type="button">
//                 <ArrowIosForwardOutline/>
//             </button>
//         </div>
//     </div>
// )
