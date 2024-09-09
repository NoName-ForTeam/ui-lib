import type { Meta, StoryObj } from '@storybook/react'
import { HeaderMobile } from './headerMobile'
import { MobileMenu } from './mobileMenu'
import {
  HomeOutline,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  Search,
} from '../../../../assets'

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
  render: () => {
    return (
      <>
        <HeaderMobile isLoggedIn onChangeLanguage={() => {}} notifications={[{}, {}]} />
        <MobileMenu>
          <a href={'/'}>
            <HomeOutline width={24} height={24} />
          </a>
          <a href={'/'}>
            <PlusSquareOutline width={24} height={24} />
          </a>
          <a href={'/'}>
            <MessageCircleOutline width={24} height={24} />
          </a>
          <a href={'/'}>
            <Search width={24} height={24} />
          </a>
          <a href={'/'}>
            <PersonOutline width={24} height={24} />
          </a>{' '}
        </MobileMenu>
      </>
    )
  },
}
export const MobileNotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
    onChangeLanguage: () => true,
  },
}
