import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'
import React from 'react'

const meta = {
  args: {
    checked: true,
    label: null,
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const UnChecked: Story = {
  args: {
    checked: false,
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
export const ControlCheckbox: Story = {
  render: args => {
    const [checked, setChecked] = React.useState(false)

    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}
export const CheckedWithLabel: Story = {
  args: {
    label: 'checked checkbox',
  },
}
export const UnCheckedWithLabel: Story = {
  args: {
    checked: false,
    label: 'unchecked checkbox',
  },
}
export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    label: 'disabled checkbox',
  },
}
export const ControlCheckboxWithLabel: Story = {
  args: {
    label: 'controlled  checkbox',
  },
  render: args => {
    const [checked, setChecked] = React.useState(false)

    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}
