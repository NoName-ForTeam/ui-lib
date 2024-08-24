import type { Meta, StoryObj } from '@storybook/react'

import { ComponentProps, useState } from 'react'

import React from 'react'
import { Pagination, SelectContainer } from './pagination'
import { Select, SelectItem } from '../select'

const meta = {
  args: {
    currentPage: 1,
    onChangePage: () => {},
    pageSize: 1,
    totalCount: 10,
  },
  component: Pagination,

  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

type PaginationProps = ComponentProps<typeof Pagination>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default usage of the Pagination component.',
      },
    },
  },
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(1)
    const handlePageChange = (num: number) => {
      setPage(num)
    }

    return (
      <Pagination
        currentPage={page}
        onChangePage={handlePageChange}
        pageSize={args.pageSize}
        totalCount={args.totalCount}
      />
    )
  },
}

export const PaginationWithSelect: Story = {
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(1)
    const [option, setOption] = useState('1')
    const [pageSize, setPageSize] = useState(1)
    const handlePageChange = (num: number) => {
      setPage(num)
    }
    const handleOptionChange = (value: string) => {
      setOption(value)
      setPageSize(Number(value))
    }
    const options = [
      { id: 0, title: '1', value: '1' },
      { id: 1, title: '5', value: '5' },
      { id: 2, title: '10', value: '10' },
      { id: 3, title: '20', value: '20' },
      { id: 4, title: '30', value: '30' },
      { id: 5, title: '50', value: '50' },
      { id: 6, title: '100', value: '100' },
    ]

    return (
      <Pagination
        currentPage={page}
        onChangePage={handlePageChange}
        pageSize={pageSize}
        totalCount={args.totalCount}
      >
        <SelectContainer content={['Show', 'on page']}>
          <Select pagination onValueChange={handleOptionChange} value={option}>
            {options.map(option => (
              <SelectItem key={option.id} value={option.value}>
                {option.title}
              </SelectItem>
            ))}
          </Select>
        </SelectContainer>
      </Pagination>
    )
  },
}
