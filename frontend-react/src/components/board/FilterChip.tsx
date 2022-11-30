import Typography from '@/components/common/typography/Typography'
import { ComponentProps } from 'react'
import { ReactComponent as CloseIcon } from '@/assets/icons/common/close_big.svg'
import './FilterChip.scss'
import classNames from 'classnames'

interface IFilterChip extends ComponentProps<'button'> {
  onClcikCloseButton?: () => void
  variant?: 'default' | 'location'
}

export default function FilterChip({
  children,
  onClcikCloseButton,
  variant = 'default',
  ...rest
}: IFilterChip) {
  return (
    <span role="button" className={classNames(variant, 'filter-chip')}>
      {children}
      {onClcikCloseButton && <CloseIcon />}
    </span>
  )
}
