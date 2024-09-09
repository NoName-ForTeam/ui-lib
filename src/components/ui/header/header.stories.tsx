import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    onChangeLanguage: () => true,
    notifications: [{}, {}],
  },
}

export const NotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
    onChangeLanguage: () => true,
  },
}
