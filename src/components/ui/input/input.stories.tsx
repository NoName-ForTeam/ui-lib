import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'
import { useState } from 'react'
import React from 'react'

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

export const EmailAndPassword: Story = {
  args: {},

  render: args => {
    const { disabled, errorMessage } = args
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
      <div>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={disabled}
          errorMessage={errorMessage}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          variant="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={disabled}
          errorMessage={errorMessage}
        />
      </div>
    )
  },
}
