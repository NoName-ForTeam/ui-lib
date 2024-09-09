import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'textLarge',
        'text16',
        'textBold16',
        'text14',
        'textMedium14',
        'textBold14',
        'textSmall',
        'textSmallBold',
        'link',
        'linkSmall',
      ],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'span', 'div', 'a'],
    },
    color: {
      control: 'color',
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const DefaultArgs = {
  children: 'The quick brown fox jumps over the lazy dog',
  color: undefined,
}

export const Default: Story = {
  args: {
    ...DefaultArgs,
    variant: 'text16',
  },
}

export const TextLarge: Story = {
  args: {
    ...DefaultArgs,
    as: 'h1',
    variant: 'textLarge',
  },
}

export const H1: Story = {
  args: {
    ...DefaultArgs,
    as: 'h1',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    ...DefaultArgs,
    as: 'h2',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    ...DefaultArgs,
    as: 'h3',
    variant: 'h3',
  },
}

export const Text16: Story = {
  args: {
    ...DefaultArgs,
    variant: 'text16',
  },
}

export const TextBold16: Story = {
  args: {
    ...DefaultArgs,
    variant: 'textBold16',
  },
}

export const Text14: Story = {
  args: {
    ...DefaultArgs,
    variant: 'text14',
  },
}

export const TextMedium14: Story = {
  args: {
    ...DefaultArgs,
    variant: 'textMedium14',
  },
}

export const TextBold14: Story = {
  args: {
    ...DefaultArgs,
    variant: 'textBold14',
  },
}

export const TextSmall: Story = {
  args: {
    ...DefaultArgs,
    variant: 'textSmall',
  },
}

export const TextSmallBold: Story = {
  args: {
    ...DefaultArgs,
    variant: 'textSmallBold',
  },
}

export const Link: Story = {
  args: {
    ...DefaultArgs,
    as: 'a',
    variant: 'link',
    href: '#',
  },
}

export const LinkSmall: Story = {
  args: {
    ...DefaultArgs,
    as: 'a',
    variant: 'linkSmall',
    href: '#',
  },
}

export const CustomColor: Story = {
  args: {
    ...DefaultArgs,
    color: 'red',
  },
}

export const CustomElement: Story = {
  args: {
    ...DefaultArgs,
    as: 'span',
  },
}
