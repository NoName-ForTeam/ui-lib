
import type { Meta, StoryObj } from '@storybook/react'

import { Sidebars } from './sidebars'

const meta = {
  component: Sidebars,
  tags: ['autodocs'],
  title: 'Components/Sidebars',
} satisfies Meta<typeof Sidebars>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
