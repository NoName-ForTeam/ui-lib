import clsx from 'clsx'

import styles from './modal.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Typography } from '@/components'
import { CloseOutline } from '@/assets/icons/components'

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

export type ModalContentProps = ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = ({ className, children, title, ...rest }: ModalContentProps) => {
  const classNames = {
    content: clsx(styles.content),
    header: styles.header,
    closeButton: clsx(styles.closeButton, !title?.length && styles.withoutTitle),
    overlay: styles.overlay,
    icon: styles.icon,
  } as const
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={classNames.overlay} />
      <Dialog.Content forceMount className={classNames.content} {...rest}>
        {title && (
          <>
            <Dialog.Title asChild>
              <div className={classNames.header}>
                <Typography variant={'h1'}>{title}</Typography>
                <Dialog.Close className={classNames.closeButton}>
                  <CloseOutline className={classNames.icon} width={24} height={24} />
                </Dialog.Close>
              </div>
            </Dialog.Title>
          </>
        )}
        <Dialog.Description asChild>
          <div className={className}>{children}</div>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
