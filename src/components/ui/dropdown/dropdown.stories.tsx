import { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown'
import { FillBell } from '../../../assets'
import { Typography } from '../typography'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const itemExample = (
  <>
    <Typography variant={'textBold14'} as={'span'}>
      Новое уведомление!
    </Typography>
    <Typography variant={'textSmall'} as={'span'} style={{ color: 'var(--accent-500)' }}>
      {' Новое'}
    </Typography>
    <Typography variant={'textSmall'}>Следующий платеж у вас спишется через 1 день</Typography>
    <Typography variant={'textSmall'} style={{ color: 'var(--light-900)' }}>
      1 час назад
    </Typography>
  </>
)

export const DropdownMenuWithScroll: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FillBell color={'var(--accent-500)'} width={'24px'} height={'24px'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent label={'Уведомления'}>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const DropdownMenuWithoutScroll: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FillBell color={'var(--accent-500)'} width={'24px'} height={'24px'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent label={'Уведомления'}>
          <DropdownMenuItem>{itemExample}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const DropdownMenuEmpty: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FillBell color={'var(--accent-500)'} width={'24px'} height={'24px'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent label={'Уведомления'}>
          {/*<DropdownMenuItem>{itemExample}</DropdownMenuItem>*/}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
