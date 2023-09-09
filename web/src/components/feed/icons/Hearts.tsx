import Typography from '@/components/common/typography/Typography'
import React, { ComponentProps } from 'react'
import cn from 'classnames'

interface Props extends ComponentProps<'div'> {
  count: number
}

export const Hearts = (props: Props) => {
  const { className, count, ...rest } = props
  return (
    <div className={cn(className, 'flex')}>
      <button type={'button'} className={cn('mr-8')}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 1C3.57485 1 1 3.48521 1 6.55134C1 9.02646 2.00625 14.9008 11.9112 20.839C12.0886 20.9443 12.2923 21 12.5 21C12.7077 21 12.9114 20.9443 13.0888 20.839C22.9937 14.9008 24 9.02646 24 6.55134C24 3.48521 21.4251 1 18.25 1C15.0748 1 12.5 4.36445 12.5 4.36445C12.5 4.36445 9.92515 1 6.75 1Z"
            stroke="#BDBDBD"
            strokeWidth={1.5}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          />
        </svg>
      </button>
      <Typography>{count}</Typography>
    </div>
  )
}
