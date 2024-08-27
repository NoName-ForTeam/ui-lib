import { type Meta, type StoryObj } from '@storybook/react'

import { Card } from './card'
import { Typography } from '../typography'
import { Button } from '../button'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Cards',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>
export const Default = {
  args: {
    style: {
      height: '280px',
      width: '480px',
    },
  },
} satisfies Story

export const CardsContent = () => {
  return (
    <Card style={{ width: '420px', padding: '26px' }}>
      <Typography as={'h1'} variant={'h1'}>
        Learn &quot;Deck Name&quot;
      </Typography>
      <Typography variant={'textBold16'}>
        Question: How &quot;This&quot; works in JavaScript?
      </Typography>
      <Typography>Количество попыток ответов на вопрос: 10</Typography>
      <Button fullWidth>Show Answer</Button>
    </Card>
  )
}
