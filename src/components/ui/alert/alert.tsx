import React from 'react'
import clsx from 'clsx'
import styles from './alert.module.scss'
import { CloseOutline } from '@/assets'
import { Button, Card, Typography } from '@/components'

type AlertType = 'success' | 'error'

interface AlertProps {
  className?: string
  type: AlertType
  message: React.ReactNode
  onClose: () => void
}

/**
 * Alert component for displaying messages with a specific type and a close button.
 * The alert can either show a success message or an error message and includes a close button.
 *
 * @component
 * @example
 * // Example usage of the Alert component
 * <Alert
 *   type="success"
 *   message="Your settings have been saved!"
 *   onClose={() => console.log('Alert closed')}
 * />
 */

export const Alert = ({ type, message, onClose, className }: AlertProps) => {
  const classNames = {
    card: clsx(styles.alert, styles[type], className),
    icon: styles.icon,
  }
  return (
    <Card className={classNames.card}>
      <Typography variant={'text16'}>{message}</Typography>
      <Button variant={'ghost'} onClick={onClose}>
        <CloseOutline className={classNames.icon} />
      </Button>
    </Card>
  )
}
