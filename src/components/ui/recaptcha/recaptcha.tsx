import clsx from 'clsx'
import { ComponentPropsWithoutRef, useRef, useState } from 'react'
import ReCAPTCHAComponent from 'react-google-recaptcha'
import styles from './recaptcha.module.scss'

type ReCaptchaProps = {
  siteKey: string
  isError?: boolean
} & ComponentPropsWithoutRef<'div'>

/**
 * ReCaptcha component for user verification.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.siteKey - The Google reCAPTCHA site key.
 * @param {boolean} [props.isError] - Indicates if there's an error state.
 * @returns {JSX.Element} The rendered Recaptcha component.
 *
 * @example
 * <ReCaptcha siteKey="your-site-key" error={false} />
 */

export const ReCaptcha = ({ siteKey, isError, ...rest }: ReCaptchaProps) => {
  const [status, setStatus] = useState<ReCaptchaStatus>('default')
  const reCaptchaRef = useRef<ReCAPTCHAComponent>(null)

  /**
   *may be needed to stylize the .container for different status in the future
   */

  type ReCaptchaStatus = 'default' | 'hover' | 'checked' | 'loading' | 'errorStatus' | 'expired'

  const handleChange = (value: string | null) => {
    if (value) {
      setStatus('checked')
    } else {
      setStatus('errorStatus')
    }
  }

  const classNames = {
    container: clsx(styles.container, isError && styles.error, styles[status]),
    errorText: styles.errorText,
  } as const
  return (
    <div className={classNames.container} {...rest}>
      <ReCAPTCHAComponent
        size={'normal'}
        theme="dark"
        ref={reCaptchaRef}
        sitekey={siteKey}
        onChange={handleChange}
      />
      {isError && (
        <div className={classNames.errorText}>Please verify that you are not a robot</div>
      )}
    </div>
  )
}