
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'
import {useState} from "react";

const meta = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['password', 'text'],
    },
  },
  args: {
    disabled: false,
    label: 'Label',
    value: 'inctagram@gmail.com'
  },
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Password: Story = {
  args: {
    type: 'password'
  }
}

export const Search: Story = {
  args: {
    search: true
  },

  render: args => {
    const { disabled, errorMessage, search } = args
    const [value, setValue] = useState('')

    return (
        <Input
            search={search}
            disabled={disabled}
            errorMessage={errorMessage}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
  }
}

export const InputWithError: Story = {
  args: {
    errorMessage: 'Error'
  }
}
