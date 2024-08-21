import * as ScrollArea from '@radix-ui/react-scroll-area'
import styles from './scroll.module.scss'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type ScrollbarType = ComponentPropsWithoutRef<typeof ScrollArea.Root>

/**

 Scroll component, allowing creation of scroll areas with customizable styles.
 @component
 @param {Object} props - Component properties.
 @param {ScrollbarType['type']} [props.type] - Scroll type.
 @param {React.Ref<HTMLDivElement>} ref - Reference to the scroll area element.
 @returns {JSX.Element} The scroll area element. */

export const Scroll = forwardRef<HTMLDivElement, ScrollbarType>(
  ({ children, type = 'auto', ...restProps }, ref) => {
    const classNames = {
      maxWidth: styles.maxWidth,
      maxHeight: styles.maxHeight,
    }
    return (
      <ScrollArea.Root asChild type={type} ref={ref}>
        <div className={styles.root} {...restProps}>
          <ScrollArea.Viewport className={styles.viewport}>{children}</ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className={styles.scrollbar}
            orientation={'vertical'}
            style={classNames}
          >
            <ScrollArea.Thumb className={styles.thumb} />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className={styles.scrollbar}
            orientation={'horizontal'}
            style={classNames}
          >
            <ScrollArea.Thumb className={styles.thumb} />
          </ScrollArea.Scrollbar>
        </div>
      </ScrollArea.Root>
    )
  }
)
Scroll.displayName = 'Scroll'
