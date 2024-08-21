import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './textArea'

const meta = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default TextArea',
    placeholder: 'Enter your text here',
  },
}

export const WithError: Story = {
  args: {
    label: 'TextArea with Error',
    placeholder: 'Enter your text here',
    error: 'This field is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'TextArea without label',
  },
}

export const LongPlaceholder: Story = {
  args: {
    label: 'Long Placeholder',
    placeholder:
      'This is a very long placeholder text to demonstrate how the TextArea component handles long content in the placeholder.',
  },
}

export const WithValue: Story = {
  args: {
    label: 'TextArea with Value',
    value: 'This is some pre-filled text in the textarea.',
  },
}

export const CustomStyling: Story = {
  args: {
    label: 'Custom Styled TextArea',
    placeholder: 'Custom styled textarea',
    className: 'custom-textarea-class',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to apply custom styling to the TextArea component using the className prop.',
      },
    },
  },
}

export const LargeTextArea: Story = {
  args: {
    label: 'Large TextArea',
    placeholder: 'This is a larger textarea',
    style: { minHeight: '150px' },
  },
}
