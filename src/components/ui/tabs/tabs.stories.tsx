import { useState } from 'react'

import { type Meta } from '@storybook/react'

import { type Tab, Tabs } from './Tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
const ContentFirst = () => {
  return <div style={{ color: 'red', maxWidth: '100%', width: '350px' }}>First</div>
}
const ContentSecond = () => {
  return <div style={{ color: 'blue', maxWidth: '100%', width: '350px' }}>Second</div>
}
const ContentThird = () => {
  return <div style={{ color: 'green', maxWidth: '100%', width: '350px' }}>Third</div>
}

const tabs: Tab[] = [
  { content: <ContentFirst />, text: 'First', value: 'First' },
  { content: <ContentSecond />, text: 'Second', value: 'Second' },
  { content: <ContentThird />, text: 'Third', value: 'Third' },
  { disabled: true, text: 'Disabled', value: 'disabled' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState<string>()

    return (
          <Tabs defaultValue={tabs[0]?.value} onValueChange={setValue} tabs={tabs} value={value} />
    )
  },
}
