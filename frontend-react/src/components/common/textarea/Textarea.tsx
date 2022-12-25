import classNames from 'classnames/bind'
import { ComponentProps } from 'react'
import styles from './Textarea.module.scss'

const cx = classNames.bind(styles)

interface ITextarea extends ComponentProps<'textarea'> {}

export default function Textarea({ className, ...rest }: ITextarea) {
  return (
    <textarea className={cx(styles.textArea, className)} {...rest}></textarea>
  )
}
