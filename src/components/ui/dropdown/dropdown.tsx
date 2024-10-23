import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import styles from './dropdown.module.scss'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './dropdown.module.scss'
import { Scroll } from '@/components'

/**
 * The root component for the dropdown menu.
 *
 * @example
 * <DropdownMenu>
 *   <DropdownMenuTrigger> Trigger </DropdownMenuTrigger>
 *   <DropdownMenuContent label={'Label'}>
 *     <DropdownMenuItem> Item1 </DropdownMenuItem>
 *     <DropdownMenuItem> Item2 </DropdownMenuItem>
 *     <DropdownMenuItem> Item3 </DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 */

export const DropdownMenu = DropdownMenuPrimitive.Root

/**
 * Trigger component for the dropdown menu.
 *
 * @example
 * <DropdownMenuTrigger className="custom-class"> Trigger </DropdownMenuTrigger>
 */
export const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, children, ...restProps }, ref) => {
  const classNames = {
    dropdownMenuTrigger: clsx(styles.dropdownMenuTrigger, className),
  } as const

  return (
    <DropdownMenuPrimitive.Trigger
      asChild
      ref={ref}
      className={classNames.dropdownMenuTrigger}
      {...restProps}
    >
      <button aria-label="Customise options">{children}</button>
    </DropdownMenuPrimitive.Trigger>
  )
})
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

/**
 * Type definition for the `DropdownMenuContent` component
 *
 * @property {string} [label] - An optional label for the dropdown content.
 * @extends {ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>}
 */
type DropdownMenuContent = {
  label?: string
} & ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>

/**
 * Content component for the dropdown menu.
 *
 * ! Attention: label should be set as props of DropdownMenuItem
 *
 * @example
 * <DropdownMenuContent label={'Label'}>
 *   <DropdownMenuItem> Item1 </DropdownMenuItem>
 *   <DropdownMenuItem> Item2 </DropdownMenuItem>
 *   <DropdownMenuItem> Item3 </DropdownMenuItem>
 * </DropdownMenuContent>
 */
export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContent
>(({ label, className, sideOffset = 3, children, ...restProps }, ref) => {
  const classNames = {
    dropdownMenuContent: clsx(styles.dropdownMenuContent, className),
    dropdownMenuArrowBack: clsx(styles.dropdownMenuArrow, styles.backArrow),
    dropdownMenuArrowFront: clsx(styles.dropdownMenuArrow, styles.frontArrow),
    dropdownMenuLabel: clsx(styles.dropdownMenuLabel, className),
    labelSeparator: styles.labelSeparator,
  } as const

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={classNames.dropdownMenuContent}
        {...restProps}
      >
        <DropdownMenuPrimitive.Arrow className={classNames.dropdownMenuArrowBack} />
        <DropdownMenuPrimitive.Arrow className={classNames.dropdownMenuArrowFront} />
        <DropdownMenuLabel className={classNames.dropdownMenuLabel}>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator className={classNames.labelSeparator} />
        <Scroll className={s.scroll}>{children}</Scroll>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/**
 * Label component for the dropdown menu.
 *
 * @example
 * <DropdownMenuLabel inset> Label </DropdownMenuLabel>
 */
const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, ...restProps }, ref) => {
  const classNames = {
    dropdownMenuLabel: clsx(styles.dropdownMenuLabel, className),
    labelSeparator: styles.labelSeparator,
  } as const

  return (
    <>
      <DropdownMenuPrimitive.Label
        ref={ref}
        className={classNames.dropdownMenuLabel}
        {...restProps}
      />
      <DropdownMenuSeparator className={classNames.labelSeparator} />
    </>
  )
})
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/**
 * Item component for the dropdown menu.
 *
 * @example
 * <DropdownMenuItem> Item </DropdownMenuItem>
 */
export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...restProps }, ref) => {
  const classNames = {
    dropdownMenuItem: clsx(styles.dropdownMenuItem, className),
  } as const

  return (
    <>
      <DropdownMenuPrimitive.Item
        ref={ref}
        className={classNames.dropdownMenuItem}
        {...restProps}
      />
      <DropdownMenuSeparator />
    </>
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/**
 * Separator component for the dropdown menu.
 *
 * @example
 * <DropdownMenuSeparator />
 */
const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const classNames = {
    dropdownMenuSeparator: clsx(styles.dropdownMenuSeparator, className),
  } as const

  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={classNames.dropdownMenuSeparator}
      {...props}
    />
  )
})
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
