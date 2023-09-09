import classNames from 'classnames/bind'
import { ComponentProps } from 'react'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

interface IButton extends ComponentProps<'button'> {
  variant:
    | 'black'
    | 'white'
    | 'primary'
    | 'primary-outline'
    | 'gray'
    | 'gray-outline'
  icon?: JSX.Element
}
export default function Button(props: IButton) {
  const { variant, className, icon, children, ...rest } = props

  return (
    <button className={cx(styles[variant], className)} {...rest}>
      {icon}
      {children}
    </button>
  )
}
