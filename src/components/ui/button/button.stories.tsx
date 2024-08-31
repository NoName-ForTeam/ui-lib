import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from './button'

import FlagRussia from '../../../assets/icons/components/FlagRussia'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  args: {
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'ghost', 'link'],
    },
    fullWidth: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
    variant: 'secondary',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FlagRussia />
        English
      </>
    ),
    variant: 'secondary',
  },
}

export const AsLink: Story = {
  args: {
    variant: 'link',
    children: 'Link',
    asChild: true,
  },
  render: args => (
    <Button {...args}>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Go to Google
      </a>
    </Button>
  ),
}
export const AsLinkDisabled: Story = {
  args: {
    variant: 'link',
    children: 'Link',
    asChild: true,
    disabled: true,
  },
  render: args => (
    <Button {...args}>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Go to Google
      </a>
    </Button>
  ),
}
