import { ComponentProps } from 'react'
import Typography from '../common/typography/Typography'
import styles from './PriceInput.module.scss'

interface IPriceInput extends ComponentProps<'input'> {
  label?: string
}
export default function PriceInput(props: IPriceInput) {
  const { disabled, value, label, ...rest } = props

  return (
    <div className="flex-col gap-16">
      {label && (
        <Typography fontColor="gray2" variant="body1" fontWeight="medium">
          {label}
        </Typography>
      )}
      <div className="flex gap-16 items-center">
        <input
          className={styles.priceInput}
          type="text"
          disabled={disabled}
          value={value}
          {...rest}
        ></input>
        <Typography
          variant="sub2"
          fontWeight="medium"
          fontColor={disabled ? 'gray4' : 'gray1'}
        >
          원
        </Typography>
      </div>
    </div>
  )
}
