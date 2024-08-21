import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'
import { useState } from 'react'

const meta = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['password', 'text', 'search'],
    },
  },
  args: {
    disabled: false,
    label: 'Label',
    value: 'inctagram@gmail.com',
  },
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Password: Story = {
  args: {},

  render: args => {
    const { disabled, errorMessage, variant = 'password' } = args
    const [value, setValue] = useState('')

    return (
      <Input
        placeholder={'Password'}
        variant={variant}
        disabled={disabled}
        label={'Label'}
        errorMessage={errorMessage}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    )
  },
}

export const Search: Story = {
  args: {},

  render: args => {
    const { disabled, errorMessage } = args
    const [value, setValue] = useState('')

    return (
      <Input
        variant={'search'}
        disabled={disabled}
        label={'Label'}
        errorMessage={errorMessage}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    )
  },
}

export const InputWithError: Story = {
  args: {
    errorMessage: 'Error',
  },
}
