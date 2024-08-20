import { type Meta, type StoryObj } from '@storybook/react'

import { Cards } from './cards'
import {Typography} from "../typography";
import {Button} from "../button";

const meta = {
  component: Cards,
  tags: ['autodocs'],
  title: 'Components/Cards',
} satisfies Meta<typeof Cards>

export default meta
type Story = StoryObj<typeof Cards>
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
      <Cards style={{ width: '420px', padding: '26px' }}>
        <Typography as={'h1'} variant={'h1'}>
          Learn &quot;Deck Name&quot;
        </Typography>
        <Typography variant={'textBold16'}>
          Question: How &quot;This&quot; works in JavaScript?
        </Typography>
        <Typography>Количество попыток ответов на вопрос: 10</Typography>
        <Button fullWidth>Show Answer</Button>
      </Cards>
  )
}
