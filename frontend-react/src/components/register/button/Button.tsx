import cn from 'classnames/bind'
import React, { ComponentProps } from 'react'
import Typography from '@/components/common/typography/Typography'

// const classNames = cn.bind(styles)

interface RegisterButton extends ComponentProps<'button'> {
  onClickEvent?: () => void
  className?: string
  label: string
  active: boolean
  buttonStyle?: React.CSSProperties
}

export const Button = (props: RegisterButton) => {
  const { onClickEvent, buttonStyle, label, className, disabled } = props
  return (
    <button
      className={className}
      type={'button'}
      onClick={onClickEvent}
      disabled={disabled}
      style={buttonStyle}
    >
      <Typography>{label}</Typography>
    </button>
  )
}
