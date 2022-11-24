import classNames from 'classnames'
import React, { ComponentProps } from 'react'
import './Typography.scss'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'sub1'
  | 'sub2'
  | 'body1'
  | 'body2'
  | 'caption'
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'
type FontColor =
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'primary'
  | 'red'
  | 'blue'
  | 'black'
  | 'white'

interface ITypography extends ComponentProps<'p'> {
  variant?: Variant
  fontWeight?: FontWeight
  fontColor?: FontColor
}
export default function Typography(props: ITypography) {
  const {
    variant = 'body1',
    fontWeight = 'regular',
    fontColor = 'black',
    children,
    ...rest
  } = props

  const element: { [key in Variant]: string } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    sub1: 'h4',
    sub2: 'h5',
    body1: 'p',
    body2: 'p',
    caption: 'p',
  }

  return React.createElement(
    element[variant],
    { className: classNames(variant, fontWeight, fontColor), ...rest },
    children
  )
}
