import clsx from 'clsx'
import * as TabsRadix from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import styles from './tabs.module.scss'

type TabsProps = ComponentPropsWithoutRef<typeof TabsRadix.Root>

/* Tabs component that serves as a container for tabbed navigation.
 * Wraps Radix UI's TabsRoot component.
 *
 * @example
 * <Tabs onValueChange={(value) => console.log(value)}>
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 */

export const Tabs = forwardRef<ElementRef<typeof TabsRadix.Root>, TabsProps>(
  ({ onValueChange, children, className, ...rest }, ref) => {
    const classNames = {
      root: clsx(styles.root, className),
    } as const

    return (
      <TabsRadix.Root className={classNames.root} onValueChange={onValueChange} ref={ref} {...rest}>
        {children}
      </TabsRadix.Root>
    )
  }
)

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsRadix.List>

export const TabsList = forwardRef<ElementRef<typeof TabsRadix.List>, TabsListProps>(
  ({ children, ...rest }, ref) => {
    return (
      <TabsRadix.List ref={ref} {...rest}>
        {children}
      </TabsRadix.List>
    )
  }
)

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsRadix.Trigger>

export const TabsTrigger = forwardRef<ElementRef<typeof TabsRadix.Trigger>, TabsTriggerProps>(
  ({ value, className, ...rest }, ref) => {
    const classNames = {
      trigger: clsx(styles.trigger, className),
    } as const
    return <TabsRadix.Trigger value={value} className={classNames.trigger} ref={ref} {...rest} />
  }
)

export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsRadix.Content>

export const TabsContent = forwardRef<ElementRef<typeof TabsRadix.Content>, TabsContentProps>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      content: clsx(styles.content, className),
    } as const

    return (
      <TabsRadix.Content className={classNames.content} ref={ref} {...rest}>
        {children}
      </TabsRadix.Content>
    )
  }
)

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'
