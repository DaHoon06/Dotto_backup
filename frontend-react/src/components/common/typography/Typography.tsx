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

export interface ITypography extends ComponentProps<'p'> {
  variant?: Variant
  fontWeight?: FontWeight
  fontColor?: FontColor
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
}

export default function Typography(props: ITypography) {
  const {
    className,
    variant = 'body1',
    fontWeight = 'regular',
    fontColor = 'gray1',
    children,
    as,
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
    as || element[variant],
    {
      className: classNames(variant, fontWeight, fontColor, className),
      ...rest,
    },
    children
  )
}
