import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ReCaptcha } from './recaptcha'
import React from 'react'

const meta = {
  component: ReCaptcha,
  tags: ['autodocs'],
  title: 'Components/ReCaptcha',
  argTypes: {
    onVerify: { action: 'verified' },
  },
} satisfies Meta<typeof ReCaptcha>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Это тестовый ключ
    onVerify: token => console.log('Verified:', token),
  },
}

export const WithError: Story = {
  args: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Это тестовый ключ
    isError: true,
    onVerify: token => console.log('Verified:', token),
  },
}

export const Interactive: Story = {
  args: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Это тестовый ключ
  },
  render: args => {
    const [isError, setIsError] = useState(false)
    const handleVerify = (token: string | null) => {
      setIsError(!token)
      args.onVerify?.(token)
    }
    return <ReCaptcha {...args} isError={isError} onVerify={handleVerify} />
  },
}
