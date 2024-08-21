import { useState } from 'react'
import { DatePickerCalendar } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DatePickerCalendar,
  title: 'Components/DatePickerCalendar',
} satisfies Meta<typeof DatePickerCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Date',
  },

  render: args => {
    const [startDate, setStartDate] = useState<Date | null>(null)

    return (
      <div>
        <DatePickerCalendar setStartDate={setStartDate} startDate={startDate} />
      </div>
    )
  },
}

export const DefaultWithErrors: Story = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Some error',
  },
}

export const DefaultDisabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Range: Story = {
  args: {
    disabled: false,
    label: 'Date',
  },

  render: args => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <div>
        <DatePickerCalendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
    )
  },
}
