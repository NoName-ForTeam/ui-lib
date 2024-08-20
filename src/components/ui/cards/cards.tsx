import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './cards.module.scss'

type CardProps = ComponentPropsWithoutRef<'div'>

export const Cards = forwardRef<ElementRef<'div'>, CardProps>(
  ({ children, className, ...rest }: CardProps, ref) => {
    const classCard = clsx(s.card, className)

    return (
      <div ref={ref} {...rest} className={classCard}>
        {children}
      </div>
    )
  }
)
