import { Button, Select, SelectItem } from '@/components'
import styles from './header.module.scss'
import { useState } from 'react'
import OutlineBell from '@/assets/icons/components/OutlineBell.tsx'
import FillBell from '@/assets/icons/components/FillBell.tsx'
import FlagRussia from '@/assets/icons/components/FlagRussia.tsx'
import FlagUnitedKingdom from '@/assets/icons/components/FlagUnitedKingdom.tsx'

type HeaderProps = {
  isLoggedIn: boolean
}

export const Header = (props: HeaderProps) => {
  const { isLoggedIn } = props

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

  const onClickBall = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
  }

  if (isLoggedIn) {
    return (
      <div className={styles.headerContainer}>
        <a className={styles.logo} href={'/'}>
          Inctagram
        </a>
        <div className={styles.buttonsContainer}>
          <Button variant={'ghost'} onClick={onClickBall}>
            {isNotificationsOpen ? (
              <OutlineBell width={24} height={24} viewBox={'-3 2 24 24'} />
            ) : (
              <FillBell width={24} height={24} />
            )}
          </Button>
          <Select defaultValue={'en'}>
            <SelectItem value={'ru'}>
              <div className={styles.selectItem}>
                <FlagRussia width={20} height={20} />
                Russian
              </div>
            </SelectItem>
            <SelectItem value={'en'}>
              <div className={styles.selectItem}>
                <FlagUnitedKingdom width={20} height={20} />
                English
              </div>
            </SelectItem>
          </Select>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.headerContainer}>
        <a className={styles.logo} href={'/'}>
          Inctagram
        </a>
        <div className={styles.buttonsContainer}>
          <Select defaultValue={'en'}>
            <SelectItem value={'ru'}>
              <div className={styles.selectItem}>
                <FlagRussia width={20} height={20} />
                Russian
              </div>
            </SelectItem>
            <SelectItem value={'en'}>
              <div className={styles.selectItem}>
                <FlagUnitedKingdom width={20} height={20} />
                English
              </div>
            </SelectItem>
          </Select>
          <Button variant={'link'} asChild>
            <a href={'/login'}>Log in</a>
          </Button>
          <Button variant={'primary'} asChild>
            <a href={'/registration'}>Sign up</a>
          </Button>
        </div>
      </div>
    )
  }
}
