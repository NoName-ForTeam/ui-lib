import type { Meta, StoryObj } from '@storybook/react'

import { Modal, ModalContent, ModalTrigger } from './modal'
import { Button } from '../button'
import { useState } from 'react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalWithTitle: Story = {
  args: {
    children: (
      <>
        <ModalTrigger>
          <Button variant={'outlined'}>Click me</Button>
        </ModalTrigger>
        <ModalContent title={'Delete Post'}>
          <div style={{ padding: '0 24px', marginTop: '30px', marginBottom: '36px' }}>
            Are you sure you want to delete this post?
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'end', marginTop: '30px' }}>
              <Button variant={'primary'}>Yes</Button>
              <Button variant={'primary'}>No</Button>
            </div>
          </div>
        </ModalContent>
      </>
    ),
  },
}

export const ModalWithControl: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
    }

    return (
      <Modal onOpenChange={setIsOpen} open={isOpen}>
        <ModalTrigger>
          <Button variant={'outlined'}>Click me</Button>
        </ModalTrigger>
        <ModalContent>
          <img
            alt={''}
            src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
            style={{ filter: 'brightness(0.8)' }}
          />
          <Button fullWidth onClick={closeModal} variant={'primary'}>
            Send
          </Button>
        </ModalContent>
      </Modal>
    )
  },
}
