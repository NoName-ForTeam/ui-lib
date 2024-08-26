import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'
import { Typography } from '../typography'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <RadioGroupItem value="option1" id="option1" />
        <Typography variant={'text14'} as="label" htmlFor="option1">
          Option 1
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <RadioGroupItem value="option2" id="option2" />
        <Typography variant={'text14'} as="label" htmlFor="option2">
          Option 2
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <RadioGroupItem value="option3" id="option3" />
        <Typography variant={'text14'} as="label" htmlFor="option3">
          Option 3
        </Typography>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <RadioGroupItem value="option1" id="option1" disabled />
          <Typography variant={'text14'} as="label" htmlFor="option1" color="var(--dark-100)">
            Disabled Option
          </Typography>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <RadioGroupItem value="option2" id="option2" />
          <Typography variant={'text14'} as="label" htmlFor="option2">
            Enabled Option
          </Typography>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <RadioGroupItem value="option3" id="option3" disabled />
          <Typography variant={'text14'} as="label" htmlFor="option3" color="var(--dark-100)">
            Another Disabled Option
          </Typography>
        </div>
      </div>
    </RadioGroup>
  ),
}
