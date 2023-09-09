import '@/pages/feed/FeedDetail.scss'
import '@/components/feed/FeedLists.scss'

import { Link } from 'react-router-dom'
import LOGO from '@/assets/icons/logo/dotto.svg'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ins as axios } from '@/lib/axios'
import Typography from '@/components/common/typography/Typography'
import Image from '@/components/common/image/Image'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import CLOSE from '@/assets/icons/common/close_big.svg'
import MENU from '@/assets/icons/myfeed/dotmenu.svg'
import { Hearts } from '@/components/feed/icons/Hearts'
import { Comments } from '@/components/feed/icons/Comments'
import SUBMIT from '@/assets/icons/myfeed/submit.svg'

interface IFeedDetail {
  content: string
  feedNo: number
  images: []
  member: {
    id: string
    memberNo: number
    nickname: string
  }
}

interface SlideButtonProps {
  className?: any
  style?: any
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const FeedDetail = () => {
  const { postNo } = useParams()
  const navigate = useNavigate()
  const [feedDetail, setFeedDetail] = useState<IFeedDetail>({
    content: '',
    feedNo: 0,
    images: [],
    member: {
      id: '',
      memberNo: 0,
      nickname: '',
    },
  })

  useEffect(() => {
    console.log(postNo)
    const load = async () => {
      try {
        const { data } = await axios.get(`/feed/${postNo}`)
        const { result } = data
        if (result) {
          const { data: feedData } = result

          const { content, feedNo, images, member } = feedData as IFeedDetail
          setFeedDetail({
            ...feedData,
            content,
            feedNo,
            images,
            member,
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
    load()
  }, [])

  const close = () => {
    navigate(-1)
  }

  function PrevArrow(props: SlideButtonProps) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '10px', zIndex: 999 }}
        onClick={onClick}
      />
    )
  }
  function NextArrow(props: SlideButtonProps) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          right: '10px',
          zIndex: 999,
        }}
        onClick={onClick}
      />
    )
  }

  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <>
      <header className={'feed__header__posting'}>
        <Link to="/">
          <img width={103} height={40} alt="닷투 로고" src={LOGO} />
        </Link>
      </header>
      <main className={'feed__detail__main'}>
        <article className={'feed__detail__container'}>
          <section className={'feed__detail__thumbnail'}>
            <Slider {...slideSettings}>
              {new Array(3).map((img, index) => {
                return (
                  <div key={index}>
                    <Image
                      className={'feed__thumbnail'}
                      src={img || 'https://picsum.photos/300/300'}
                      alt={`thumbnail`}
                    />
                  </div>
                )
              })}
            </Slider>
          </section>
          <section className={'feed__detail__body'}>
            <section className={'feed__detail__profile'}>
              <div className={'flex items-center w-100'}>
                <Image
                  alt={'feed_detail_profile'}
                  src={'https://picsum.photos/300/300'}
                  width={48}
                  height={48}
                />
                <div className={'pl-12 w-100'}>
                  <div className={'w-100 flex justify-between'}>
                    <Typography
                      variant={'body1'}
                      fontColor={'gray1'}
                      fontWeight={'bold'}
                    >
                      {feedDetail.member.nickname}
                    </Typography>
                    <button type={'button'}>
                      <Image
                        alt={'feed-detail-drop-menu'}
                        width={24}
                        height={24}
                        src={MENU}
                      />
                    </button>
                  </div>
                  <div className={'flex'}>
                    <Typography
                      variant={'body2'}
                      fontWeight={'regular'}
                      fontColor={'primary'}
                    >
                      타투이스트
                    </Typography>
                    <Typography
                      variant={'body2'}
                      fontWeight={'regular'}
                      fontColor={'gray3'}
                    >
                      1 시간 전
                    </Typography>
                  </div>
                </div>
              </div>
            </section>
            <section className={'feed__detail__content'}>
              <Typography fontWeight={'regular'} variant={'sub2'}>
                {feedDetail.content}
              </Typography>
            </section>
            <hr />
            <section>COMMENT</section>
            <section>
              <section className={'feed__information'}>
                <Hearts count={1} className={'mr-24'} />
                <Comments count={2} />
              </section>

              <hr />

              <section className={'feed__comment__container'}>
                <Image
                  width={32}
                  height={32}
                  className={'my__profile__img'}
                  src={'https://picsum.photos/300/300'}
                  alt={`my profile`}
                />
                <input
                  type={'text'}
                  placeholder={'댓글을 입력하세요...'}
                  className={'feed__comment__input'}
                />
                <button type={'button'} className={'feed__comment__submit'}>
                  <Image
                    width={32}
                    height={32}
                    src={SUBMIT}
                    alt={`comment submit`}
                  />
                </button>
              </section>
            </section>
          </section>
        </article>
        <button
          type={'button'}
          onClick={close}
          className={'feed__detail__close'}
        >
          <Image alt={'feed-close'} src={CLOSE} width={24} height={24} />
        </button>
      </main>
    </>
  )
}
