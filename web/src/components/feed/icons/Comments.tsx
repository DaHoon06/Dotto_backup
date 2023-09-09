import COMMENT from '@/assets/icons/myfeed/comment.svg'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'
import { ComponentProps } from 'react'
import cn from 'classnames'

interface Props extends ComponentProps<'div'> {
  count: number
}

export const Comments = (props: Props) => {
  const { className, count, ...rest } = props
  return (
    <div className={cn(className, 'flex')}>
      <Image
        className={cn('mr-8')}
        alt={'comment'}
        src={COMMENT}
        width={24}
        height={24}
      />
      <Typography>{count}</Typography>
    </div>
  )
}
