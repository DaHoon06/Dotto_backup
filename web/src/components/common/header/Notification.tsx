import Image from '@/components/common/image/Image'
import ALARM from '@/assets/icons/default_alarm.svg'
import Typography from '@/components/common/typography/Typography'
import PROFILE from '@/assets/icons/default.svg'
import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

export const Notification = () => {
  const [messageBox, setMessageBox] = useState(false)
  const [mouseHover, setMouseHover] = useState(false)
  const ele = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('mousedown', onClickHandlerOutside)
    return () => {
      document.removeEventListener('mousedown', onClickHandlerOutside)
    }
  }, [])

  const onClickHandlerOutside = (e: Event) => {
    const { target } = e
    if (ele.current && !ele.current.contains(target)) setMessageBox(false)
  }

  const onClickHandlerShowMessageBox = () => {
    setMessageBox(!messageBox)
  }

  return (
    <section ref={ele}>
      <div
        onMouseOver={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        className={cn(mouseHover ? 'mouse-over' : '', 'notification__button')}
      >
        <Image
          onClick={onClickHandlerShowMessageBox}
          className={'pointer'}
          alt={'alarm'}
          src={ALARM}
          width={30}
          height={30}
        />
        <span
          className={cn(mouseHover ? 'border-color' : '', 'notification-alarm')}
        >
          1
        </span>
      </div>

      <div
        className={cn(
          messageBox ? 'show' : 'hide',
          'notification scroll scroll-type'
        )}
      >
        <ul>
          <Typography
            className={'notification-date'}
            fontColor={'gray1'}
            variant={'body1'}
            fontWeight={'medium'}
          >
            오늘
          </Typography>
          <li className={'flex notification-list'}>
            <Image alt={'profile'} src={PROFILE} width={38} height={38} />
            <div className={'pl-12'}>
              <Typography>
                <span>User Name</span> 님이 댓글을 남기셨습니다.
              </Typography>
              <Typography
                variant={'caption'}
                fontWeight={'medium'}
                fontColor={'gray3'}
              >
                18분 전
              </Typography>
            </div>
          </li>
          <li className={'flex notification-list'}>
            <Image alt={'profile'} src={PROFILE} width={38} height={38} />
            <div className={'pl-12'}>
              <Typography>
                <span>User Name</span> 님이 댓글을 남기셨습니다.
              </Typography>
              <Typography
                variant={'caption'}
                fontWeight={'medium'}
                fontColor={'gray3'}
              >
                18분 전
              </Typography>
            </div>
          </li>
        </ul>
        <hr />
        <ul>
          <Typography
            className={'notification-date'}
            fontColor={'gray1'}
            variant={'body1'}
            fontWeight={'medium'}
          >
            이번주
          </Typography>
          <li className={'flex notification-list'}>
            <Image alt={'profile'} src={PROFILE} width={38} height={38} />
            <div className={'pl-12'}>
              <Typography>
                <span>User Name</span> 님이 댓글을 남기셨습니다.
              </Typography>
              <Typography
                variant={'caption'}
                fontWeight={'medium'}
                fontColor={'gray3'}
              >
                18분 전
              </Typography>
            </div>
          </li>
          <li className={'flex notification-list'}>
            <Image alt={'profile'} src={PROFILE} width={38} height={38} />
            <div className={'pl-12'}>
              <Typography>
                <span>User Name</span> 님이 댓글을 남기셨습니다.
              </Typography>
              <Typography
                variant={'caption'}
                fontWeight={'medium'}
                fontColor={'gray3'}
              >
                18분 전
              </Typography>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
