import type { Meta, StoryObj } from '@storybook/react'
import { HeaderMobile } from './headerMobile'

const meta = {
  component: HeaderMobile,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof HeaderMobile>

export default meta
type Story = StoryObj<typeof meta>

export const MobileLoggedIn: Story = {
  args: {
    isLoggedIn: true,
    onChangeLanguage: () => true,
    notifications: [{}, {}],
  },
}
export const MobileNotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
    onChangeLanguage: () => true,
  },
}
