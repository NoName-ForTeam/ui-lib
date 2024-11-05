import clsx from 'clsx'

import styles from './modal.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as ModalRadix from '@radix-ui/react-dialog'

export type ModalProps = ComponentPropsWithoutRef<typeof ModalRadix.Root>

/**
 * Modal component that serves as a wrapper for modal dialogs.
 * Utilizes Radix UI's ModalRadix component under the hood.
 *
 * @example
 * <Modal>
 *     <ModalTrigger>
 *       <button>Open Modal</button>
 *     </ModalTrigger>
 *     <ModalContent>
 *       <ModalHeader>
 *         <ModalTitle>Modal Title</ModalTitle>
 *       </ModalHeader>
 *       <div>
 *         <p>This is the content of the modal.</p>
 *       </div>
 *       <ModalFooter>
 *         <ModalClose>
 *           <button>Close</button>
 *         </ModalClose>
 *       </ModalFooter>
 *     </ModalContent>
 *   </Modal>
 */

export const Modal = ({ ...rest }: ModalProps) => {
  return <ModalRadix.Root {...rest} />
}

Modal.displayName = ModalRadix.Root.displayName

export type ModalTriggerProps = ComponentPropsWithoutRef<typeof ModalRadix.Trigger>

/**
 * ModalTrigger component that serves as the button or element that triggers the modal to open.
 * Wraps the Radix UI's ModalRadix.Trigger component.
 */

export const ModalTrigger = ({ className, children, ...rest }: ModalTriggerProps) => {
  const classNames = {
    trigger: clsx(styles.content, className),
  } as const
  return (
    <ModalRadix.Trigger asChild className={classNames.trigger} {...rest}>
      {children}
    </ModalRadix.Trigger>
  )
}

ModalTrigger.displayName = ModalRadix.Trigger.displayName

export type ModalHeaderProps = ComponentPropsWithoutRef<'div'>

export const ModalHeader = ({ className, ...rest }: ModalHeaderProps) => {
  const classNames = {
    header: clsx(styles.header, className),
  } as const

  return <div className={classNames.header} {...rest} />
}

ModalHeader.displayName = 'Modal Header'

export type ModalFooterProps = ComponentPropsWithoutRef<'div'>

export const ModalFooter = ({ className, ...rest }: ModalFooterProps) => {
  const classNames = {
    footer: className,
  } as const
  return <div className={classNames.footer} {...rest} />
}

ModalFooter.displayName = 'Modal Footer'

export type ModalContentProps = ComponentPropsWithoutRef<typeof ModalRadix.Content>

export const ModalContent = forwardRef<ElementRef<typeof ModalRadix.Content>, ModalContentProps>(
  ({ className, children, ...rest }, ref) => {
    const classNames = {
      content: clsx(styles.content, className),
      overlay: styles.overlay,
    } as const

    return (
      <ModalRadix.Portal>
        <ModalRadix.Overlay className={classNames.overlay} />
        <ModalRadix.Content ref={ref} forceMount className={classNames.content} {...rest}>
          {children}
        </ModalRadix.Content>
      </ModalRadix.Portal>
    )
  }
)

ModalContent.displayName = ModalRadix.Content.displayName

export type ModalCloseProps = ComponentPropsWithoutRef<typeof ModalRadix.Close>

/**
 * ModalClose component that serves as a button or element to close the modal.
 * Wraps the Radix UI's ModalRadix.Close component.
 */

export const ModalClose = forwardRef<ElementRef<typeof ModalRadix.Close>, ModalCloseProps>(
  ({ ...rest }, ref) => {
    return <ModalRadix.Close ref={ref} {...rest} />
  }
)

ModalClose.displayName = ModalRadix.Close.displayName

export type ModalTitleProps = ComponentPropsWithoutRef<typeof ModalRadix.Title>

export const ModalTitle = forwardRef<ElementRef<typeof ModalRadix.Title>, ModalTitleProps>(
  ({ ...rest }, ref) => {
    return <ModalRadix.Title ref={ref} {...rest} />
  }
)

ModalTitle.displayName = ModalRadix.Title.displayName

export type ModalDescriptionProps = ComponentPropsWithoutRef<typeof ModalRadix.Description>
export const ModalDescription = ({ ...rest }: ModalDescriptionProps) => (
  <ModalRadix.Description asChild {...rest} />
)

ModalDescription.displayName = ModalRadix.Description.displayName
