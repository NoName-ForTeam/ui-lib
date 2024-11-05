import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { PopoverRoot, PopoverTrigger, PopoverContent } from './popover'
import { TrashOutline, Edit2Outline, MoreHorizontal } from '@/assets'
import { Typography } from '../typography'

const meta = {
  component: PopoverRoot,
  tags: ['autodocs'],
  title: 'Components/Popover',
} satisfies Meta<typeof PopoverRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PopoverTrigger>
          <MoreHorizontal width={24} height={24} />
        </PopoverTrigger>
      </div>
      <PopoverContent align="end">
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <Edit2Outline width={24} height={24} />
          <Typography variant="text14">Edit Post</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '12px',
          }}
        >
          <TrashOutline width={24} height={24} />
          <Typography variant="text14">Delete Post</Typography>
        </div>
      </PopoverContent>
    </PopoverRoot>
  ),
}
