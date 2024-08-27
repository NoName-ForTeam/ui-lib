import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './alert'
import { useState } from 'react'
import { Button } from '../button'

const meta = {
  component: Alert,
  tags: ['autodocs'],
  title: 'Components/Alert',
  args: {
    onClose: () => {},
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Your settings are saved',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    message: (
      <>
        <b>Error!</b> Server is not available
      </>
    ),
  },
}

export const ControlledAlert: Story = {
  args: {
    type: 'success',
    message: (
      <>
        <b>Great!</b> You click fo show alert
      </>
    ),
  },
  render: args => {
    const [show, setShow] = useState(false)
    return (
      <>
        <Button variant={'outlined'} onClick={() => setShow(true)}>
          Show
        </Button>
        {show && <Alert {...args} onClose={() => setShow(false)} />}
      </>
    )
  },
}
