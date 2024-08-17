
import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
