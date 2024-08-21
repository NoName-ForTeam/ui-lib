
  import clsx from 'clsx'
  import * as TabsSwitcher from '@radix-ui/react-tabs'
  import {ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode} from "react";
  import styles from './tabs.module.scss'

  export type Tab  = {
    content?: ReactNode
    disabled?: boolean
    text: string
    value: string
  }

  type TabsProps = {
    tabs: Tab[]
  } & ComponentPropsWithoutRef<typeof TabsSwitcher.Root>

  export const Tabs = forwardRef<ElementRef<typeof TabsSwitcher.Root>, TabsProps>(({
      onValueChange,
      tabs,
      className,
      value,
      ...rest
                                                                                   }, ref) => {
   const classNames = {
    root: clsx(styles.root, className),
     trigger: styles.trigger
  } as const

        return (
            <TabsSwitcher.Root
                className={classNames.root}
                onValueChange={onValueChange}
                ref={ref}
                value={value}
                {...rest}
            >
              <TabsSwitcher.List>
                {tabs.map(t => (
                    <TabsSwitcher.Trigger
                        className={classNames.trigger}
                        disabled={t.disabled}
                        key={t.value}
                        value={t.value}
                    >
                      {t.text}
                    </TabsSwitcher.Trigger>
                ))}
              </TabsSwitcher.List>
              {tabs.map(tab => {
                return (
                    tab.content && (
                        <TabsSwitcher.Content key={tab.value} value={tab.value}>
                          {tab.content}
                        </TabsSwitcher.Content>
                    )
                )
              })}
            </TabsSwitcher.Root>
        )
      })
