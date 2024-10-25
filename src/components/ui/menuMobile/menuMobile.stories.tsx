import type { Meta, StoryObj } from '@storybook/react'
import { MenuMobile } from './menuMobile'
import {
  HomeOutline,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  Search,
} from '@/assets'
import styles from './menuMobile.module.scss'

const meta = {
  component: MenuMobile,
  tags: ['autodocs'],
  title: 'Components/MenuMobile',
} satisfies Meta<typeof MenuMobile>

export default meta
type Story = StoryObj<typeof meta>

export const MenuMobileDefault: Story = {
  args: {
    children: [
      <a href={'/'} className={styles.item}>
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
