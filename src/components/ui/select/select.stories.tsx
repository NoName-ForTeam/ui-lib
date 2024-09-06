import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectItem } from './select'
import React, { useState } from 'react'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
  parameters: {
    docs: {
      description: {
        component:
          "A customizable Select component that wraps Radix UI's Select functionality. It allows users to select an option from a dropdown list and supports pagination styling.",
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Select',
    label: 'Select-box',
    children: (
      <>
        <SelectItem value={'1'}>One</SelectItem>
        <SelectItem value={'2'}>Two</SelectItem>
        <SelectItem value={'3'}>Three</SelectItem>
        <SelectItem value={'4'}>Four</SelectItem>
        <SelectItem value={'5'}>Five</SelectItem>
      </>
    ),
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Select',
    children: (
      <>
        <SelectItem value={'1'}>One</SelectItem>
        <SelectItem value={'2'}>Two</SelectItem>
        <SelectItem value={'3'}>Three</SelectItem>
        <SelectItem value={'4'}>Four</SelectItem>
        <SelectItem value={'5'}>Five</SelectItem>
      </>
    ),
  },
}

export const PaginationSelect: Story = {
  args: {
    defaultValue: '5',
    pagination: true,
    children: (
      <>
        <SelectItem value={'1'}>10</SelectItem>
        <SelectItem value={'2'}>20</SelectItem>
        <SelectItem value={'3'}>30</SelectItem>
        <SelectItem value={'4'}>50</SelectItem>
        <SelectItem value={'5'}>100</SelectItem>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('1')

    return (
      <Select
        value={value}
        onValueChange={setValue}
        placeholder="Controlled Select"
        label="Controlled Select"
      >
        <SelectItem value="1">One</SelectItem>
        <SelectItem value="2">Two</SelectItem>
        <SelectItem value="3">Three</SelectItem>
        <SelectItem value="4">Four</SelectItem>
        <SelectItem value="5">Five</SelectItem>
      </Select>
    )
  },
}
