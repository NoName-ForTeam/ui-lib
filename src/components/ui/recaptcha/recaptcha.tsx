import clsx from 'clsx'
import { ComponentPropsWithoutRef, useCallback } from 'react'
import ReCAPTCHAComponent from 'react-google-recaptcha'
import styles from './recaptcha.module.scss'

type ReCaptchaProps = {
  /**
   *  The Google reCAPTCHA site key.
   */
  siteKey: string
  /**
   * Indicates if there's an error state.
   */
  isError?: boolean
  /**
   * Callback function to handle reCAPTCHA response
   */
  onVerify: (token: string | null) => void
} & ComponentPropsWithoutRef<'div'>

/**
 * ReCaptcha component for user verification.
 * @component
 * @example
 *  const [isError, setIsError] = useState(false);
 * const handleVerify = (token: string | null) => {
 *  if (token) {
 *   setIsError(false);
 *} else {
 *   setIsError(true);
 *}
 *};
 *
 * <ReCaptcha siteKey="your-site-key" isError={false} onVerify={(token) => handleVerification(token)} />
 */

export const ReCaptcha = ({ siteKey, isError, onVerify, ...rest }: ReCaptchaProps) => {
  const classNames = {
    container: clsx(styles.container, isError && styles.error),
    errorText: styles.errorText,
  } as const
  const handleChange = useCallback(
    (token: string | null) => {
      onVerify(token)
    },
    [onVerify]
  )
  return (
    <div className={classNames.container} {...rest}>
      <ReCAPTCHAComponent size={'normal'} theme="dark" sitekey={siteKey} onChange={handleChange} />
      {isError && (
        <div className={classNames.errorText}>Please verify that you are not a robot</div>
      )}
    </div>
  )
}
