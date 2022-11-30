import classNames from 'classnames'
import { ComponentProps } from 'react'
import './Button.scss'

interface IButton extends ComponentProps<'button'> {
  variant: 'black' | 'white' | 'primary'
}
export default function Button(props: IButton) {
  const { variant, className, ...rest } = props

  return (
    <button
      className={classNames(`${variant}-button`, className)}
      {...rest}
    ></button>
  )
}
