import classNames from 'classnames/bind'
import Typography, { ITypography } from '../common/typography/Typography'
import styles from './TagChip.module.scss'

const cx = classNames.bind(styles)

interface ITagChip extends ITypography {
  size?: 'md' | 'lg'
}

export default function TagChip({ size = 'md', children, ...rest }: ITagChip) {
  return (
    <Typography
      className={cx(styles.tagchip, size)}
      fontColor="gray2"
      variant="caption"
      {...rest}
    >
      {children}
    </Typography>
  )
}
