import styles from './headerMobile.module.scss'
import { ElementRef, forwardRef } from 'react'
import clsx from 'clsx'
import { Select, SelectItem } from '@/components'
import { FlagRussia, FlagUnitedKingdom, MoreHorizontal } from '@/assets'
import { HeaderProps } from '@/components/ui/header/header.tsx'

export const HeaderMobile = forwardRef<ElementRef<'div'>, HeaderProps>(
  ({ isLoggedIn, onChangeLanguage, className, ...rest }, ref) => {
    const classNames = {
      headerMobileContainer: clsx(styles.headerMobileContainer, className),
      logo: styles.logo,
      buttonsContainer: styles.buttonsContainer,
      select: styles.select,
      selectItem: styles.selectItem,
      flags: styles.flag,
      more: styles.more,
    } as const

    const onChangeLanguageCallback = (value: string) => {
      onChangeLanguage(value)
    }

    return (
      <div className={classNames.headerMobileContainer} ref={ref} {...rest}>
        <a className={classNames.logo} href={'/'}>
          Inctagram
        </a>
        <div className={classNames.buttonsContainer}>
          <Select
            onValueChange={() => onChangeLanguageCallback}
            defaultValue={'en'}
            className={classNames.select}
          >
            <SelectItem value={'ru'}>
              <div className={classNames.selectItem}>
                <FlagRussia className={classNames.flags} />
              </div>
            </SelectItem>
            <SelectItem value={'en'}>
              <div className={classNames.selectItem}>
                <FlagUnitedKingdom className={classNames.flags} />
              </div>
            </SelectItem>
          </Select>
          {isLoggedIn && <MoreHorizontal className={classNames.more} />}
        </div>
      </div>
    )
  }
)
