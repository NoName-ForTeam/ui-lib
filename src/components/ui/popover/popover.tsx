import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as Popover from '@radix-ui/react-popover'
import styles from './popover.module.scss'
import clsx from 'clsx'

/**
 * PopoverComponent that displays a popover with a trigger and content.
 *
 * @component
 * @example
 * <PopoverRoot>
 *    <PopoverTrigger>
 *      <button>Open Popover</button>
 *    </PopoverTrigger>
 *    <PopoverContent>
 *       <div>
 *         <p>This is the content of popover.</p>
 *       </div>
 *     </PopoverContent>
 * </PopoverRoot>
 */

export type PopoverRootProps = ComponentPropsWithoutRef<typeof Popover.Root>

export const PopoverRoot = ({ ...rest }: PopoverRootProps) => {
  return <Popover.Root {...rest} />
}

/* PopoverTrigger component that serves as the button or element to open the popover */

export type PopoverTriggerProps = ComponentPropsWithoutRef<typeof Popover.Trigger>

export const PopoverTrigger = ({ className, children, ...rest }: PopoverTriggerProps) => {
  const classNames = {
    trigger: clsx(styles.trigger, className),
  } as const
  return (
    <Popover.Trigger asChild className={classNames.trigger} {...rest}>
      {children}
    </Popover.Trigger>
  )
}

/* PopoverContent component that contains the content to be displayed in the popover */

export type PopoverContentProps = ComponentPropsWithoutRef<typeof Popover.Content>

export const PopoverContent = forwardRef<ElementRef<typeof Popover.Content>, PopoverContentProps>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      content: clsx(styles.content, className),
    } as const
    return (
      <Popover.Content className={classNames.content} sideOffset={5} {...rest} ref={ref}>
        {children}
      </Popover.Content>
    )
  }
)

PopoverRoot.displayName = 'PopoverRoot'
PopoverTrigger.displayName = 'PopoverTrigger'
PopoverContent.displayName = 'PopoverContent'
