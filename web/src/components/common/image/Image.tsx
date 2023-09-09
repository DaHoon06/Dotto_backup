import { ComponentProps, useState } from 'react'

interface IImage extends ComponentProps<'img'> {
  src?: string
  alt: string
  fallbackkImageSrc?: string
}

export default function Image(props: IImage) {
  const {
    src = 'https://picsum.photos/400/400',
    fallbackkImageSrc,
    alt,
    className,
    ...rest
  } = props

  const [isError, setIsError] = useState(false)

  const source = isError || !src ? fallbackkImageSrc : src

  return (
    <img
      className={className}
      src={source}
      alt={alt}
      onError={() => setIsError(true)}
      {...rest}
    />
  )
}
