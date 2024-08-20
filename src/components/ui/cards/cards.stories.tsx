import { type Meta, type StoryObj } from '@storybook/react'

import { Cards } from './cards'

const meta = {
  component: Cards,
  tags: ['autodocs'],
  title: 'Components/Cards',
} satisfies Meta<typeof Cards>

export default meta
type Story = StoryObj<typeof Cards>
export const Default = {
  args: {
    style: {
      height: '280px',
      width: '480px',
    },
  },
} satisfies Story
