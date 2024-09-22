import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectItem } from './select'

const meta = {
  component: Select,
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

type City = {
  city: string
  cityEn: string
  id: number
}

const cities: City[] = [
  { city: 'Москва', cityEn: 'Moscow', id: 1 },
  { city: 'Лондон', cityEn: 'London', id: 2 },
  { city: 'Париж', cityEn: 'Paris', id: 3 },
  { city: 'Берлин', cityEn: 'Berlin', id: 4 },
  { city: 'Рим', cityEn: 'Rome', id: 5 },
  { city: 'Мадрид', cityEn: 'Madrid', id: 6 },
  { city: 'Токио', cityEn: 'Tokyo', id: 7 },
  { city: 'Пекин', cityEn: 'Beijing', id: 8 },
  { city: 'Вашингтон', cityEn: 'Washington D.C.', id: 9 },
  { city: 'Оттава', cityEn: 'Ottawa', id: 10 },
  { city: 'Канберра', cityEn: 'Canberra', id: 11 },
  { city: 'Бразилиа', cityEn: 'Brasilia', id: 12 },
  { city: 'Буэнос-Айрес', cityEn: 'Buenos Aires', id: 13 },
  { city: 'Мехико', cityEn: 'Mexico City', id: 14 },
  { city: 'Каир', cityEn: 'Cairo', id: 15 },
  { city: 'Претория', cityEn: 'Pretoria', id: 16 },
  { city: 'Нью-Дели', cityEn: 'New Delhi', id: 17 },
  { city: 'Джакарта', cityEn: 'Jakarta', id: 18 },
  { city: 'Сеул', cityEn: 'Seoul', id: 19 },
  { city: 'Анкара', cityEn: 'Ankara', id: 20 },
  { city: 'Афины', cityEn: 'Athens', id: 21 },
  { city: 'Осло', cityEn: 'Oslo', id: 22 },
  { city: 'Стокгольм', cityEn: 'Stockholm', id: 23 },
  { city: 'Хельсинки', cityEn: 'Helsinki', id: 24 },
  { city: 'Копенгаген', cityEn: 'Copenhagen', id: 25 },
  { city: 'Амстердам', cityEn: 'Amsterdam', id: 26 },
  { city: 'Брюссель', cityEn: 'Brussels', id: 27 },
  { city: 'Вена', cityEn: 'Vienna', id: 28 },
  { city: 'Прага', cityEn: 'Prague', id: 29 },
  { city: 'Варшава', cityEn: 'Warsaw', id: 30 },
]

export const Primary: Story = {
  args: {
    placeholder: 'Select',
    label: 'Select-box',
    children: (
      <>
        <SelectItem value={'1'}>One</SelectItem>
        <SelectItem value={'2'}>Two</SelectItem>
        <SelectItem value={'3'}>Three</SelectItem>
        <SelectItem value={'4'}>Four</SelectItem>
        <SelectItem value={'5'}>Five</SelectItem>
      </>
    ),
  },
}

export const Scroll: Story = {
  args: {
    placeholder: 'Select',
    label: 'Select-box',
    children: (
      <>
        {cities.map(city => (
          <SelectItem key={city.id} value={city.city}>
            {city.city}
          </SelectItem>
        ))}
      </>
    ),
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Select',
    children: (
      <>
        <SelectItem value={'1'}>One</SelectItem>
        <SelectItem value={'2'}>Two</SelectItem>
        <SelectItem value={'3'}>Three</SelectItem>
        <SelectItem value={'4'}>Four</SelectItem>
        <SelectItem value={'5'}>Five</SelectItem>
      </>
    ),
  },
}

export const PaginationSelect: Story = {
  args: {
    defaultValue: '5',
    pagination: true,
    children: (
      <>
        <SelectItem value={'1'}>10</SelectItem>
        <SelectItem value={'2'}>20</SelectItem>
        <SelectItem value={'3'}>30</SelectItem>
        <SelectItem value={'4'}>50</SelectItem>
        <SelectItem value={'5'}>100</SelectItem>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
}
