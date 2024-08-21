import type { Meta, StoryObj } from '@storybook/react'
import { Scroll } from './scroll'

const meta = {
  component: Scroll,
  tags: ['autodocs'],
  title: 'Components/Scroll',
} satisfies Meta<typeof Scroll>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultVertical: Story = {
  args: {
    children: (
      <div style={{ width: '100px', height: '500px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis dignissim augue id
        dignissim. Curabitur euismod, est non aliquam aliquam, turpis turpis ornare nulla, sit amet
        finibus erat tellus eget orci. Integer bibendum sem ut nulla dapibus dapibus. Curabitur
        sodales nulla tincidunt magna eleifend, nec fermentum neque tristique. Nullam ornare elit
        tortor, at dictum massa vulputate in. Praesent lobortis diam vel nunc lacinia, nec pharetra
        magna placerat. Aenean sit amet efficitur nunc. Aliquam dictum arcu sapien, eu vehicula
        lacus fermentum sed. Nullam hendrerit felis id elit tristique, vitae lobortis orci
        tincidunt. Donec porttitor nunc a leo porta tristique.
      </div>
    ),
    style: { paddingRight: '8px', width: 'fit-content' },
    type: 'auto',
  },
}

export const DefaultHorizontal: Story = {
  args: {
    children: (
      <div style={{ width: '400px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis dignissim augue id
        dignissim. Curabitur euismod, est non aliquam aliquam, turpis turpis ornare nulla, sit amet
        finibus erat tellus eget orci. Integer bibendum sem ut nulla dapibus dapibus. Curabitur
        sodales nulla tincidunt magna eleifend, nec fermentum neque tristique. Nullam ornare elit
        tortor, at dictum massa vulputate in. Praesent lobortis diam vel nunc lacinia, nec pharetra
        magna placerat. Aenean sit amet efficitur nunc. Aliquam dictum arcu sapien, eu vehicula
        lacus fermentum sed. Nullam hendrerit felis id elit tristique, vitae lobortis orci
        tincidunt. Donec porttitor nunc a leo porta tristique.
      </div>
    ),
    style: { width: '100px' },
    type: 'auto',
  },
}
