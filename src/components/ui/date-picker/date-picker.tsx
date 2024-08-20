import React, {ReactNode, forwardRef, ComponentProps} from 'react';
import DatePicker, {ReactDatePickerCustomHeaderProps, registerLocale} from 'react-datepicker';
import {format} from 'date-fns';
import {enUS} from 'date-fns/locale';
import clsx from 'clsx';
import s from './date-picker.module.scss'
import {ArrowIosBackOutline, ArrowIosForwardOutline, Calendar} from "@/assets";

// Регистрация локали для DatePicker
registerLocale('enUS', enUS);

export type DatePickerProps = {
    disabled?: boolean;
    endDate?: Date | null;
    errorMessage?: string;
    label?: ReactNode;
    required?: boolean;
    setEndDate?: (date: Date | null) => void;
    setStartDate: (date: Date | null) => void;
    startDate: Date | null;
} & ComponentProps<'div'>

export const DatePickerCalendar = (
    {endDate, startDate, setEndDate, setStartDate, errorMessage, disabled, label, required, ...restProps}: DatePickerProps) => {
    // Проверка на наличие ошибки
    // const showError = !!errorMessage;
    const showError = !!errorMessage && errorMessage.length > 0
    const startDateCalendar = startDate || undefined;
    const endDateCalendar = endDate || undefined;

    // Функция для обработки изменения дат
    const handleDateChange = (dates: [Date | null, Date | null] | Date) => {
        if (Array.isArray(dates)) {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate?.(end);
        } else {
            setStartDate(dates);
        }
    };
    const classNames={
        calendar: s.calendar,
        day: () => s.day,
        errorText: s.errorText,
        input: clsx(s.input, showError && s.error),
        inputContainer: s.inputContainer,
        root: clsx(s.root),
    }


    return (
        <div className={classNames.root} {...restProps}>
          <DatePicker
              selected={startDate}
             calendarStartDay={1}
              calendarClassName={classNames.calendar}
              // dayClassName={classNames.day}
              className={classNames.input}
              onChange={handleDateChange}
              startDate={startDateCalendar}
              endDate={endDateCalendar}
              selectsRange // Выбор диапазона дат, если endDate определен
              disabled={disabled}
              dateFormat="dd/MM/yyyy"
              locale="enUS"
              required={required}
              customInput={<CustomInput disabled={disabled} label={label}/>}
              renderCustomHeader={CustomHeader}
              popperPlacement="bottom-start"
              showPopperArrow={false}
          />
            {showError && <p className={classNames.errorText}>{errorMessage}</p>}
        </div>
    );
};

type CustomInputProps = {
    disabled?: boolean;
    label?: ReactNode;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({disabled,label, ...rest}, ref) => {
        const classNames = {
            icon: clsx(s.icon, disabled && s.disabled),
            inputContainer: s.inputContainer,
        }

        return(
            <div className={classNames.inputContainer} >
                <label>{label}</label>
                    <input ref={ref} disabled={disabled} {...rest} />
                    <Calendar className={classNames.icon}/>
            </div>
        )
    }
);

const CustomHeader = ({date, decreaseMonth, increaseMonth}: ReactDatePickerCustomHeaderProps) => (
    <div className={s.header}>
        <div>{format(date, 'LLLL yyyy', {locale: enUS})}</div>
        <div className={s.buttonBox}>
            <button className={s.button} onClick={decreaseMonth} type="button">
                <ArrowIosBackOutline/>
            </button>
            <button className={s.button} onClick={increaseMonth} type="button">
                <ArrowIosForwardOutline/>
            </button>
        </div>
    </div>
)
