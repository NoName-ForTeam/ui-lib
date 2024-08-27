import type { Meta, StoryObj } from '@storybook/react'

import { Modal, ModalContent, ModalFooter, ModalTrigger } from './modal'
import { Button } from '../button'
import { CSSProperties, useState } from 'react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const style: CSSProperties = {
  display: 'flex',
  justifyContent: 'end',
  gap: '24px',
  padding: '0 24px 36px',
}

export const ModalWithTitle: Story = {
  args: {
    children: (
      <div>
        <ModalTrigger>
          <Button variant={'outlined'}>Click me</Button>
        </ModalTrigger>
        <ModalContent title={'Delete Post'}>
          <div style={{ padding: '0 24px', marginTop: '30px', marginBottom: '36px' }}>
            Are you sure you want to delete this post?
          </div>
          <ModalFooter style={style}>
            <Button variant={'primary'}>Yes</Button>
            <Button variant={'primary'}>No</Button>
          </ModalFooter>
        </ModalContent>
      </div>
    ),
  },
}

export const SlideModal: Story = {
  args: {
    children: (
      <div>
        <ModalTrigger>
          <Button variant={'outlined'}>Click me</Button>
        </ModalTrigger>
        <ModalContent headerType={'slide'} actionBtn={'Next'} title={'Cropping'}>
          <img
            alt={''}
            src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
            style={{ filter: 'brightness(0.8)' }}
          />
        </ModalContent>
      </div>
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
          <ModalFooter>
            <Button fullWidth onClick={closeModal} variant={'primary'}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  },
}
