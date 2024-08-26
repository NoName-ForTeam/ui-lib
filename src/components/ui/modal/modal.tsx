import clsx from 'clsx'

import styles from './modal.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button, Typography } from '@/components'
import { CloseOutline, ArrowIosBack } from '@/assets'

/**
 * Modal component that serves as a wrapper for modal dialogs.
 * Utilizes Radix UI's Dialog component under the hood.
 *
 * @param {ModalProps} props - The properties for the Modal component.
 * @returns {JSX.Element} The rendered Modal component.
 *
 * @typedef {Object} ModalProps
 * @extends {ComponentPropsWithoutRef<typeof Dialog.Root>}
 */

export type ModalProps = ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = ({ children, ...rest }: ModalProps) => {
  return <Dialog.Root {...rest}>{children}</Dialog.Root>
}

/**
 * ModalTrigger component that serves as the button or element that triggers the modal to open.
 * Wraps the Radix UI's Dialog.Trigger component.
 *
 * @param {ModalTriggerProps} props - The properties for the ModalTrigger component.
 * @returns {JSX.Element} The rendered ModalTrigger component.
 *
 * @typedef {Object} ModalTriggerProps
 * @extends {ComponentPropsWithoutRef<typeof Dialog.Trigger>}
 */

export type ModalTriggerProps = ComponentPropsWithoutRef<typeof Dialog.Trigger>

export const ModalTrigger = ({ className, children, ...rest }: ModalTriggerProps) => {
  const classNames = {
    trigger: clsx(styles.content, className),
  } as const
  return (
    <Dialog.Trigger asChild className={classNames.trigger} {...rest}>
      {children}
    </Dialog.Trigger>
  )
}

/**
 * ModalHeader component that serves as the header section of the modal.
 *
 * @param {ModalHeaderProps} props - The properties for the ModalHeader component.
 * @returns {JSX.Element} The rendered ModalHeader component.
 */

export type HeaderType = 'default' | 'slide'

export type ModalHeaderProps = {
  type?: HeaderType
  actionBtn?: string
} & ComponentPropsWithoutRef<'div'>

export const ModalHeader = ({ title, className, type, actionBtn, ...rest }: ModalHeaderProps) => {
  const classNames = {
    header: clsx(styles.header, className),
    closeButton: styles.closeButton,
    icon: styles.icon,
  } as const
  const modalType =
    type === 'default' ? (
      <>
        <Typography variant={'h1'}>{title}</Typography>
        <Dialog.Close className={classNames.closeButton}>
          <CloseOutline className={classNames.icon} width={24} height={24} />
        </Dialog.Close>
      </>
    ) : (
      <>
        <Button color={'#fff'} variant={'ghost'}>
          <ArrowIosBack className={classNames.icon} width={24} height={24} />
        </Button>
        <Typography variant={'h1'}>{title}</Typography>
        <Button variant={'ghost'}>{actionBtn}</Button>
      </>
    )

  return (
    <div className={classNames.header} {...rest}>
      {modalType}
    </div>
  )
}

/**
 * ModalFooter component that serves as the footer section of the modal.
 *
 * @param {ModalFooterProps} props - The properties for the ModalFooter component.
 * @returns {JSX.Element} The rendered ModalFooter component.
 */

export type ModalFooterProps = ComponentPropsWithoutRef<'div'>

export const ModalFooter = ({ children, className, ...rest }: ModalFooterProps) => {
  const classNames = {
    footer: className,
  }
  return (
    <div className={classNames.footer} {...rest}>
      {children}
    </div>
  )
}

/**
 * ModalContent component that serves as the main content area of the modal.
 * Includes an optional title and close button.
 *
 * @param {ModalContentProps} props - The properties for the ModalContent component.
 * @param {string} [props.title] - The title of the modal. If not provided, the close button will be positioned differently.
 * @returns {JSX.Element} The rendered ModalContent component.
 *
 * @typedef {Object} ModalContentProps
 * @extends {ComponentPropsWithoutRef<typeof Dialog.Content>}
 */

export type ModalContentProps = {
  actionBtn?: string
  headerType?: HeaderType
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = forwardRef<ElementRef<typeof Dialog.Content>, ModalContentProps>(
  ({ className, headerType = 'default', actionBtn, children, title, ...rest }, ref) => {
    const classNames = {
      content: clsx(styles.content, className),
      overlay: styles.overlay,
      closeButton: clsx(styles.closeButton, styles.withoutHeader),
      icon: styles.icon,
    } as const

    const header = title ? (
      <ModalHeader type={headerType} title={title} actionBtn={actionBtn} />
    ) : (
      <Dialog.Close className={classNames.closeButton}>
        <CloseOutline className={classNames.icon} width={24} height={24} />
      </Dialog.Close>
    )

    return (
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.overlay} />
        <Dialog.Content ref={ref} forceMount className={classNames.content} {...rest}>
          {header}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    )
  }
)
