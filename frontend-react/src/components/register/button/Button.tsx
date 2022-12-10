import React, { ComponentProps } from 'react'

interface RegisterButton extends ComponentProps<'button'> {
  onClickEvent?: () => void
  className?: string
  label: string
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
      {label}
    </button>
  )
}
