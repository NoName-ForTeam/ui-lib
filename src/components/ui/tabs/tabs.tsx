import clsx from 'clsx'
import * as TabsRadix from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import styles from './tabs.module.scss'

type TabsProps = ComponentPropsWithoutRef<typeof TabsRadix.Root>

/**
 * The main Tabs component that provides the container for all tab-related elements.
 * It wraps around Radix UI's Tabs.Root component and applies custom styles.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The tab triggers and contents.
 * @param {string} [props.className] - Additional class name for styling the component.
 * @param {function} [props.onValueChange] - Callback function that is triggered when the active tab value changes.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the underlying Radix Tabs Root element.
 * @returns {JSX.Element} The Tabs component.
 */

export const Tabs = forwardRef<ElementRef<typeof TabsRadix.Root>, TabsProps>(
  ({ onValueChange, children, className, ...rest }, ref) => {
    const classNames = clsx(styles.root, className)

    return (
      <TabsRadix.Root className={classNames} onValueChange={onValueChange} ref={ref} {...rest}>
        {children}
      </TabsRadix.Root>
    )
  }
)

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsRadix.List>

/**
 * The TabsList component represents a container for TabsTrigger elements.
 * It wraps around Radix UI's Tabs.List component and can be used to group tab triggers.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The tab triggers to be contained within the list.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the underlying Radix Tabs List element.
 * @returns {JSX.Element} The TabsList component.
 */

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

/**
 * The TabsTrigger component represents a clickable tab trigger element.
 * It wraps around Radix UI's Tabs.Trigger component and applies custom styles.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.value - The value that will be assigned to this trigger. This value will be passed to onValueChange when the tab is selected.
 * @param {React.Ref<HTMLButtonElement>} ref - Reference to the underlying Radix Tabs Trigger element.
 * @returns {JSX.Element} The TabsTrigger component.
 */

export const TabsTrigger = forwardRef<ElementRef<typeof TabsRadix.Trigger>, TabsTriggerProps>(
  ({ value, ...rest }, ref) => {
    return <TabsRadix.Trigger value={value} className={styles.trigger} ref={ref} {...rest} />
  }
)

export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsRadix.Content>

/**
 * The TabsContent component represents the content associated with a particular tab.
 * It wraps around Radix UI's Tabs.Content component and applies custom styles.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed when the associated tab is active.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the underlying Radix Tabs Content element.
 * @returns {JSX.Element} The TabsContent component.
 */

export const TabsContent = forwardRef<ElementRef<typeof TabsRadix.Content>, TabsContentProps>(
  ({ children, ...rest }, ref) => {
    return (
      <TabsRadix.Content className={styles.content} ref={ref} {...rest}>
        {children}
      </TabsRadix.Content>
    )
  }
)
