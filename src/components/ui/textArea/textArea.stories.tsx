
import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './textArea'

const meta = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
