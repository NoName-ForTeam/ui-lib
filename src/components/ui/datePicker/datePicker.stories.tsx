import { useState } from 'react'

import { CustomDatePicker } from './'
import { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'

const meta = {
  component: CustomDatePicker,
  title: 'Components/Date Picker',
} satisfies Meta<typeof CustomDatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Date',
    placeholder: moment().format('L'),
    selectsRange: false,
  },

  render(args) {
    const [startDate, setStartDate] = useState<Date | null>(null)

    return (
      <div>
        <CustomDatePicker setStartDate={setStartDate} startDate={startDate} {...args} />
      </div>
    )
  },
}
export const Required: Story = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
}
export const DefaultWithErrors: Story = {
  ...Default,
  args: {
    ...Default.args,
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
    placeholder: 'Check date',
    label: 'Date',
    selectsRange: true,
  },

  render(args) {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <div>
        <CustomDatePicker
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          startDate={startDate}
          {...args}
        />
      </div>
    )
  },
}
