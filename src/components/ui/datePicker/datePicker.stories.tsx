import { useState } from 'react'

import { CustomDatePicker } from './'
import { Meta } from '@storybook/react'

export default {
  component: CustomDatePicker,
  title: 'Components/Date Picker',
} satisfies Meta<typeof CustomDatePicker>

export const Default = {
  args: {
    disabled: false,
    label: 'Дата',
    placeholder: 'Выбрать дату',
  },

  render(args) {
    const [startDate, setStartDate] = useState(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <CustomDatePicker setStartDate={setStartDate} startDate={startDate} selectsRange={false} {...args} />
        </div>
    )
  },
}
export const Required = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
}
export const DefaultWithErrors = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Some error',
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Range = {
  args: {
    placeholder: 'Выбрать период',
  },

  render(args) {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <CustomDatePicker
              endDate={endDate}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
              startDate={startDate}
              selectsRange={true}
              {...args}
          />
        </div>
    )
  },
}

// import { useState } from 'react'
// import { RDPC } from './'
// import { Meta, StoryObj } from '@storybook/react'
//
// const meta = {
//   component: RDPC,
//   title: 'Components/DatePickerCalendar',
// } satisfies Meta<typeof RDPC>
//
// export default meta
//
// type Story = StoryObj<typeof meta>
//
// export const Default: Story = {
//   args: {
//     disabled: false,
//     label: 'Date',
//   },
//
//   render: args => {
//     const [startDate, setStartDate] = useState<Date | null>(null)
//
//     return (
//       <div>
//         <RDPC setStartDate={setStartDate} startDate={startDate} />
//       </div>
//     )
//   },
// }
//
// export const DefaultWithErrors: Story = {
//   ...Default,
//   args: {
//     ...Default.args,
//     error: true,
//     errorMessage: 'Some error',
//   },
// }
//
// export const DefaultDisabled: Story = {
//   ...Default,
//   args: {
//     ...Default.args,
//     disabled: true,
//   },
// }
//
// export const Range: Story = {
//   args: {
//     disabled: false,
//     label: 'Date',
//   },
//
//   render: args => {
//     const [startDate, setStartDate] = useState<Date | null>(null)
//     const [endDate, setEndDate] = useState<Date | null>(null)
//
//     return (
//       <div>
//         <RDPC
//           startDate={startDate}
//           setStartDate={setStartDate}
//           endDate={endDate}
//           setEndDate={setEndDate}
//         />
//       </div>
//     )
//   },
// }
