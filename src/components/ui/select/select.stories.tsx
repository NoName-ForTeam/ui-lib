import { Meta, StoryObj } from '@storybook/react'
import { Option, Select } from './select'

const meta = {
  component: Select,
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const items: Option[] = [
  { value: '1', content: 'One' },
  { value: '2', content: 'Two' },
  { value: '3', content: 'Three' },
  { value: '4', content: 'Four' },
  { value: '5', content: 'Five' },
]

export const Primary: Story = {
  args: {
    placeholder: 'Select',
    label: 'Select-box',
    options: items,
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Select',
    options: items,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
    options: items,
  },
}
