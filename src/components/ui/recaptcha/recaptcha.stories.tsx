import type { Meta, StoryObj } from '@storybook/react'

import { ReCaptcha } from './recaptcha'

const meta = {
  component: ReCaptcha,
  tags: ['autodocs'],
  title: 'Components/ReCaptcha',
  argTypes: {
    siteKey: { control: 'text' },
  },
} satisfies Meta<typeof ReCaptcha>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Это тестовый ключ
  },
}
export const Error: Story = {
  args: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Это тестовый ключ
    isError: true,
  },
}
