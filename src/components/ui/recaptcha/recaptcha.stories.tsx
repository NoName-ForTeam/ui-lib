import type { Meta, StoryObj } from '@storybook/react'

import { Recaptcha } from './recaptcha'

const meta = {
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
