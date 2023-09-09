import Typography from '@/components/common/typography/Typography'
import '@/components/feed/FeedLists.scss'
import Image from '@/components/common/image/Image'
import DELETE from '@/assets/icons/common/delete.svg'
import EDIT from '@/assets/icons/common/pencil.svg'
import React from 'react'
import cn from 'classnames'

interface Props {
  selectedIndex: number
  keyIndex: number
}

export const ToggleMenu = (props: Props) => {
  const { selectedIndex, keyIndex } = props

  return (
    <div
      className={cn(
        'feed__toggle__menu',
        selectedIndex === keyIndex ? 'open' : 'hide'
      )}
    >
      <ul>
        <li>
          <button type={'button'} className={'feed__toggle__menu__button'}>
            <Typography
              variant={'body1'}
              fontWeight={'medium'}
              className={'pr-4'}
            >
              수정하기
            </Typography>
            <Image alt={'EDIT'} src={EDIT} width={14} height={14} />
          </button>
        </li>
        <li>
          <button type={'button'} className={'feed__toggle__menu__button'}>
            <Typography
              variant={'body1'}
              fontWeight={'medium'}
              className={'pr-4'}
            >
              삭제하기
            </Typography>
            <Image alt={'DELETE'} src={DELETE} width={13} height={14} />
          </button>
        </li>
      </ul>
    </div>
  )
}
