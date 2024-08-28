import clsx from 'clsx'
import { ComponentPropsWithoutRef, useRef } from 'react'
import ReCAPTCHAComponent from 'react-google-recaptcha'
import styles from './recaptcha.module.scss'

// type ReCaptchaStatus = 'default' | 'checked' | 'error'

type ReCaptchaProps = {
  /**
   *  The Google reCAPTCHA site key.
   */
  siteKey: string
  /**
   * Indicates if there's an error state.
   */
  isError?: boolean
} & ComponentPropsWithoutRef<'div'>

/**
 * ReCaptcha component for user verification.
 * @example
 * <ReCaptcha siteKey="your-site-key" error={false} />
 */

export const ReCaptcha = ({ siteKey, isError, ...rest }: ReCaptchaProps) => {
  // const [status, setStatus] = useState<ReCaptchaStatus>('default')
  const reCaptchaRef = useRef<ReCAPTCHAComponent>(null)

  /**
   *may be needed to stylize the .container for different status in the future
   */

  // const handleChange = (value: string | null) => {
  //   if (value) {
  //     setStatus('checked')
  //   } else {
  //     setStatus('error')
  //   }
  // }

  const classNames = {
    container: clsx(styles.container, isError && styles.error),
    errorText: styles.errorText,
  } as const
  return (
    <div className={classNames.container} {...rest}>
      <ReCAPTCHAComponent
        size={'normal'}
        theme="dark"
        ref={reCaptchaRef}
        sitekey={siteKey}
        // onChange={handleChange}
      />
      {isError && (
        <div className={classNames.errorText}>Please verify that you are not a robot</div>
      )}
    </div>
  )
}
