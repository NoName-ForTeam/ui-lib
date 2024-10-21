import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { PopoverRoot, PopoverTrigger, PopoverContent } from './popover'
import MoreHorizontal from '../../../assets/icons/components/MoreHorizontal'
import Edit2Outline from '../../../assets/icons/components/Edit2Outline'
import TrashOutline from '../../../assets/icons/components/TrashOutline'

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
      <PopoverTrigger>
        <MoreHorizontal  color='blue' />
      </PopoverTrigger>

      <PopoverContent>

          <div           style={{
            display: 'flex',
            gap: '12px'
          }}>
            <Edit2Outline width={24} height={24}/> Edit Post
          </div>
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <TrashOutline  width={24} height={24}/> Delete Post
          </div>
        
              </PopoverContent>
    </PopoverRoot>
  ),
}
