import cn from 'classnames'
import Image from '@/components/common/image/Image'
import { DESIGN, FAVORITES, RESERVATION, REVIEW } from '@/assets/icons/mymenu'
import Typography from '@/components/common/typography/Typography'
import React, { useEffect, useRef, useState } from 'react'
import { DropIcon } from '@/components/register/icon/DropIcon'

interface Props {
  logout: (payload: boolean) => void
}

export const DropMenu = (e: Props) => {
  const { logout } = e
  const [showMenu, setShowMenu] = useState(false)
  const [showCircleBg, setCircleBg] = useState(false)

  const ele = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('mousedown', onClickHandlerOutside)
    return () => {
      document.removeEventListener('mousedown', onClickHandlerOutside)
    }
  }, [])

  const onClickHandlerOutside = (e: Event) => {
    const { target } = e
    if (ele.current && !ele.current.contains(target)) setShowMenu(false)
  }

  const onClickHandlerDropMenu = () => {
    setShowMenu(!showMenu)
  }

  const onClickHandlerLogout = () => {
    window.sessionStorage.clear()
    logout(false)
  }

  return (
    <section ref={ele}>
      <button
        type={'button'}
        onClick={onClickHandlerDropMenu}
        onMouseOver={() => setCircleBg(true)}
        onMouseLeave={() => setCircleBg(false)}
        className={cn(showCircleBg ? 'mouse-over' : '', 'dropdown__button')}
      >
        <DropIcon width={15} height={9} />
      </button>
      <div
        className={cn(
          showMenu
            ? 'profile-menu--in-dropdwon profile-menu show'
            : 'profile-menu--out-dropdown hide',
          'profile--dropdown'
        )}
      >
        <ul>
          <li className={'flex'}>
            <Image alt={'타투 도안'} src={DESIGN} width={16} height={16} />
            <Typography
              className={'pl-12'}
              variant={'body2'}
              fontColor={'gray1'}
            >
              타투도안
            </Typography>
          </li>
          <li className={'flex'}>
            <Image alt={'에약 목록'} src={RESERVATION} width={16} height={16} />
            <Typography
              className={'pl-12'}
              variant={'body2'}
              fontColor={'gray1'}
            >
              내 예약목록
            </Typography>
          </li>
          <li className={'flex'}>
            <Image alt={'내 댓글 / 리뷰'} src={REVIEW} width={16} height={16} />
            <Typography
              className={'pl-12'}
              variant={'body2'}
              fontColor={'gray1'}
            >
              내 댓글 / 리뷰
            </Typography>
          </li>
          <li className={'flex'}>
            <Image alt={'찜한 목록'} src={FAVORITES} width={17} height={17} />
            <Typography
              className={'pl-12'}
              variant={'body2'}
              fontColor={'gray1'}
            >
              찜한 목록
            </Typography>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Typography variant={'body2'} fontColor={'gray1'}>
              보안 / 계정
            </Typography>
          </li>
          <li>
            <button onClick={onClickHandlerLogout} type={'button'}>
              <Typography variant={'body2'} fontColor={'gray1'}>
                로그아웃
              </Typography>
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
