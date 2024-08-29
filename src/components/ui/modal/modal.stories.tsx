import type { Meta, StoryObj } from '@storybook/react'

import { Modal, ModalClose, ModalContent, ModalFooter, ModalHeader, ModalTrigger } from './modal'
import { Button } from '../button'
import { CSSProperties, useState } from 'react'
import { Typography } from '../typography'
import { CloseOutline, ArrowIosBack } from '../../../assets/icons/components'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const styleFooter: CSSProperties = {
  display: 'flex',
  justifyContent: 'end',
  gap: '24px',
  padding: '0 24px 36px',
}

const styleHeader: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
}

const svgStyle: CSSProperties = {
  width: '24px',
  height: '24px',
  color: 'white',
  cursor: 'pointer',
}

const absoluteBtn: CSSProperties = {
  position: 'absolute',
  zIndex: '1',
  top: '-28px',
  right: '-32px',
}

export const ModalWithTitle: Story = {
  args: {
    children: (
      <>
        <ModalTrigger>
          <Button variant={'outlined'}>Click me</Button>
        </ModalTrigger>
        <ModalContent title={'Delete Post'}>
          <ModalHeader style={styleHeader}>
            <Typography variant={'h1'}>Delete Post</Typography>
            <ModalClose>
              <CloseOutline style={svgStyle} />
            </ModalClose>
          </ModalHeader>
          <div style={{ padding: '0 24px', marginTop: '30px', marginBottom: '36px' }}>
            Are you sure you want to delete this post?
          </div>
          <ModalFooter style={styleFooter}>
            <Button variant={'primary'}>Yes</Button>
            <Button variant={'primary'}>No</Button>
          </ModalFooter>
        </ModalContent>
      </>
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
        <ModalContent>
          <>
            <ModalHeader style={styleHeader}>
              <Button variant={'ghost'}>
                <ArrowIosBack style={svgStyle} />
              </Button>
              <Typography variant={'h1'}>Cropping</Typography>
              <Button variant={'ghost'}>Next</Button>
            </ModalHeader>
            <img
              alt={''}
              src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
              style={{ filter: 'brightness(0.8)' }}
            />
          </>
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
          <ModalClose style={absoluteBtn}>
            <CloseOutline style={svgStyle} />
          </ModalClose>
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
