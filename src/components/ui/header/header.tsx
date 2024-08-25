import { Button, Select, SelectItem } from '@/components'
import styles from './header.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { OutlineBell, FillBell, FlagRussia, FlagUnitedKingdom } from '@/assets'
import clsx from 'clsx'

export type HeaderProps = {
  isLoggedIn: boolean
  onChangeLanguage: (value: string) => void
  notifications?: unknown[]
} & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<ElementRef<'div'>, HeaderProps>(
  ({ isLoggedIn, onChangeLanguage, notifications, className, ...rest }, ref) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

    const onClickBall = () => {
      setIsNotificationsOpen(!isNotificationsOpen)
    }

    const onChangeLanguageCallback = (value: string) => {
      onChangeLanguage(value)
    }

    const classNames = {
      header: clsx(styles.headerContainer, className),
      logo: styles.logo,
      buttonBell: styles.bellButton,
      buttonsContainer: styles.buttonsContainer,
      notifications: styles.notifications,
      select: styles.select,
      selectItem: styles.selectItem,
      flags: styles.flag,
      bell: styles.bell,
    } as const

    return (
      <div className={classNames.header} ref={ref} {...rest}>
        <a className={classNames.logo} href={'/'}>
          Inctagram
        </a>
        <div className={classNames.buttonsContainer}>
          {isLoggedIn && (
            <Button variant={'ghost'} onClick={onClickBall} className={classNames.buttonBell}>
              {isNotificationsOpen ? (
                <>
                  <FillBell className={classNames.bell} />
                </>
              ) : (
                <>
                  <OutlineBell className={classNames.bell} viewBox={'-3 2 24 24'} />
                  <div className={classNames.notifications}>{notifications?.length}</div>
                </>
              )}
            </Button>
          )}
          <Select
            onValueChange={() => onChangeLanguageCallback}
            defaultValue={'en'}
            className={classNames.select}
          >
            <SelectItem value={'ru'}>
              <div className={classNames.selectItem}>
                <FlagRussia className={classNames.flags} />
                Russian
              </div>
            </SelectItem>
            <SelectItem value={'en'}>
              <div className={classNames.selectItem}>
                <FlagUnitedKingdom className={classNames.flags} />
                English
              </div>
            </SelectItem>
          </Select>

          {!isLoggedIn && (
            <>
              <Button variant={'link'} asChild>
                <a href={'/login'}>Log in</a>
              </Button>
              <Button variant={'primary'} asChild>
                <a href={'/registration'}>Sign up</a>
              </Button>
            </>
          )}
        </div>
      </div>
    )
  }
)
