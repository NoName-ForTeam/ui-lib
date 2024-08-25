import type { Meta, StoryObj } from '@storybook/react'
import { HeaderMobileMenu } from './headerMobileMenu'
import {
  HomeOutline,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  Search,
} from '../../../../assets'

const meta = {
  component: HeaderMobileMenu,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof HeaderMobileMenu>

export default meta
type Story = StoryObj<typeof meta>

export const MobileMenu: Story = {
  args: {
    children: [
      <a href={'/'}>
        <HomeOutline width={24} height={24} />
      </a>,
      <a href={'/'}>
        <PlusSquareOutline width={24} height={24} />
      </a>,
      <a href={'/'}>
        <MessageCircleOutline width={24} height={24} />
      </a>,
      <a href={'/'}>
        <Search width={24} height={24} />
      </a>,
      <a href={'/'}>
        <PersonOutline width={24} height={24} />
      </a>,
    ],
  },
}
