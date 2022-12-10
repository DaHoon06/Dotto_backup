import classNames from 'classnames'
import { ComponentProps } from 'react'
import './Button.scss'

interface IButton extends ComponentProps<'button'> {
  variant: 'black' | 'white' | 'primary' | 'primary-outline' | 'gray'
  icon?: JSX.Element
}
export default function Button(props: IButton) {
  const { variant, className, icon, children, ...rest } = props

  return (
    <button className={classNames(`${variant}-button`, className)} {...rest}>
      {icon}
      {children}
    </button>
  )
}
