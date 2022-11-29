import cn from 'classnames/bind'
import { ComponentProps } from 'react'
import styles from './Input.module.scss'
import { ReactComponent as ResetIcon } from '@/assets/icons/common/input_reset.svg'
import Typography from '@/components/common/typography/Typography'

const classNames = cn.bind(styles)

interface IInput extends ComponentProps<'input'> {
  variant?: 'default' | 'blue' | 'red'
  handleResetButton?: () => void
  assitiveText?: string
}

export default function Input(props: IInput) {
  const {
    variant = 'default',
    disabled,
    className,
    handleResetButton,
    value,
    assitiveText,
    ...rest
  } = props

  return (
    <div>
      <label
        className={classNames(
          { disabled },
          styles.label,
          styles[variant],
          className
        )}
      >
        <input
          disabled={disabled}
          className={styles.input}
          value={value}
          {...rest}
        />
        {handleResetButton && value && (
          <ResetIcon
            onClick={handleResetButton}
            className={styles.input_reset}
          />
        )}
      </label>
      {assitiveText && variant !== 'default' && (
        <Typography
          className="pl-8 pr-8"
          variant="body2"
          fontColor={variant}
          fontWeight="medium"
        >
          {assitiveText}
        </Typography>
      )}
    </div>
  )
}
