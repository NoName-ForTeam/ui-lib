import { type Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

const ContentFirst = () => {
  return <div style={{ color: 'red', maxWidth: '100%', width: '350px' }}>First</div>
}
const ContentSecond = () => {
  return <div style={{ color: 'blue', maxWidth: '100%', width: '350px' }}>Second</div>
}
const ContentThird = () => {
  return <div style={{ color: 'green', maxWidth: '100%', width: '350px' }}>Third</div>
}

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TabsList>
          <TabsTrigger defaultValue={'First'} value={'First'}>
            First
          </TabsTrigger>
          <TabsTrigger value={'Second'}>Second</TabsTrigger>
          <TabsTrigger value={'Third'}>Third</TabsTrigger>
          <TabsTrigger disabled={true} value={'Disabled'}>
            Disabled
          </TabsTrigger>
        </TabsList>
        <TabsContent value={'First'}>
          <ContentFirst />
        </TabsContent>
        <TabsContent value={'Second'}>
          <ContentSecond />
        </TabsContent>
        <TabsContent value={'Third'}>
          <ContentThird />
        </TabsContent>
      </>
    ),
  },
  render: args => {
    return <Tabs defaultValue={'First'}>{args.children}</Tabs>
  },
}

export const ActiveDisabled = {
  args: {
    children: (
      <TabsList>
        <TabsTrigger disabled={true} value={'Disabled'}>
          Disabled
        </TabsTrigger>
      </TabsList>
    ),
  },
  render: args => {
    return <Tabs defaultValue={'Disabled'}>{args.children}</Tabs>
  },
}
