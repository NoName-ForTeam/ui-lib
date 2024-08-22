import type { Meta, StoryObj } from '@storybook/react'

import { Sidebars, SidebarsElement } from './sidebars'

import { Home } from '@/assets'
import { Button } from '../button'
import React from 'react'

const meta = {
  component: Sidebars,
  tags: ['autodocs'],
  title: 'Components/Sidebars',
} satisfies Meta<typeof Sidebars>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <div
          style={{ marginBottom: '60px', display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <SidebarsElement>
            <Home /> Home
          </SidebarsElement>
          <SidebarsElement>
            <Home /> Create
          </SidebarsElement>
          <SidebarsElement>
            <Home /> My profile
          </SidebarsElement>
          <SidebarsElement>
            <Home /> Messenger
          </SidebarsElement>
          <SidebarsElement>
            <Home /> Search
          </SidebarsElement>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <SidebarsElement>
            <Home /> Statistics
          </SidebarsElement>
          <SidebarsElement disabled>
            <Home />
            Favorites
          </SidebarsElement>
        </div>
        <div>
          <SidebarsElement>
            <Home />
            Log Out
          </SidebarsElement>
        </div>
      </>
    ),
  },
}
