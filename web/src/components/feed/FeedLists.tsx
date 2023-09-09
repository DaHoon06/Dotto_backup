import '@/components/feed/FeedLists.scss'
import Typography from '@/components/common/typography/Typography'
import Image from '@/components/common/image/Image'
import MENU from '@/assets/icons/myfeed/dotmenu.svg'
import { Hearts } from '@/components/feed/icons/Hearts'
import { Comments } from '@/components/feed/icons/Comments'
import SUBMIT from '@/assets/icons/myfeed/submit.svg'
import React, { useEffect, useState } from 'react'
import { ToggleMenu } from '@/components/feed/ToggleMenu'
import Slider from 'react-slick'
import '@/components/feed/FeedLists.scss'
import { useNavigate } from 'react-router-dom'
import { ins as axios } from '@/lib/axios'

interface SlideButtonProps {
  className?: any
  style?: any
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const mockData = [
  {
    user: {
      id: 1,
      profile: 'https://picsum.photos/300/300',
      nickname: 'User_Nickname',
    },
    post: {
      id: 1,
      writer: 'User_Name1',
      createdAt: '1시간 전',
      profile: 'https://picsum.photos/300/300',
      thumbnails: [
        {
          id: 1,
          src: 'https://picsum.photos/300/300',
        },
        {
          id: 2,
          src: 'https://picsum.photos/300/300',
        },
        {
          id: 3,
          src: 'https://picsum.photos/300/300',
        },
      ],
      comment: [
        {
          id: 1,
        },
      ],
      like: 6,
    },
  },
  {
    user: {
      id: 2,
      profile: 'https://picsum.photos/300/300',
      nickname: 'User_Nickname',
    },
    post: {
      id: 2,
      writer: 'User_Name2',
      createdAt: '방금',
      profile: 'https://picsum.photos/300/300',
      thumbnails: [
        {
          id: 1,
          src: 'https://picsum.photos/300/300',
        },
        {
          id: 2,
          src: 'https://picsum.photos/300/300',
        },
        {
          id: 3,
          src: 'https://picsum.photos/300/300',
        },
      ],
      comment: [
        {
          id: 1,
        },
      ],
      like: 5,
    },
  },
  {
    user: {
      id: 3,
      profile: 'https://picsum.photos/300/300',
      nickname: 'User_Nickname',
    },
    post: {
      id: 3,
      writer: 'User_Name3',
      createdAt: '10시간 전',
      profile: 'https://picsum.photos/300/300',
      thumbnails: [
        {
          id: 1,
          src: 'https://picsum.photos/300/300',
        },
        {
          id: 2,
          src: 'https://picsum.photos/300/300',
        },
        {
          id: 3,
          src: 'https://picsum.photos/300/300',
        },
      ],
      comment: [
        {
          id: 0,
        },
      ],
      like: 0,
    },
  },
]

export const FeedLists = () => {
  const navigate = useNavigate()
  const [selectedCard, setSelectedCard] = useState<number>(-1)

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get('/feed')
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
    load()
  }, [])

  const onClickHandlerShowMenu = (index: number) => {
    if (selectedCard > -1) setSelectedCard(-1)
    else setSelectedCard(index)
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

  const onClickFeed = (postNo: number) => {
    try {
      navigate(`/feed/detail/${postNo}`)
    } catch (e) {
      console.log(e)
    }
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
    <article className={'feed__container'}>
      <ul>
        {mockData.map((feed, index) => {
          return (
            <li key={index} className={'feed__card'}>
              <section className={'feed__profile'}>
                <section
                  className={'flex'}
                  onClick={() => onClickFeed(feed.post.id)}
                >
                  <Image
                    width={40}
                    height={40}
                    className={'feed__profile__img'}
                    src={feed.post.profile || 'https://picsum.photos/300/300'}
                    alt={`thubnail`}
                  />
                  <div>
                    <Typography
                      variant={'body1'}
                      fontWeight={'bold'}
                      fontColor={'black'}
                    >
                      {feed.post.writer}
                    </Typography>
                    <Typography
                      variant={'body2'}
                      fontWeight={'regular'}
                      fontColor={'gray3'}
                    >
                      {feed.post.createdAt}
                    </Typography>
                  </div>
                </section>
                <section>
                  <button
                    type={'button'}
                    onClick={() => onClickHandlerShowMenu(index)}
                  >
                    <Image src={MENU} alt={`feed menu`} />
                  </button>
                  <ToggleMenu selectedIndex={selectedCard} keyIndex={index} />
                </section>
              </section>

              <Slider {...slideSettings}>
                {feed.post.thumbnails.map((img, thumbnail_index) => {
                  return (
                    <div
                      key={thumbnail_index}
                      onClick={() => onClickFeed(feed.post.id)}
                    >
                      <Image
                        className={'feed__thumbnail'}
                        src={img.src}
                        alt={`thumbnail`}
                      />
                    </div>
                  )
                })}
              </Slider>

              <section className={'feed__information'}>
                <Hearts count={feed.post.like} className={'mr-24'} />
                <Comments count={feed.post.comment.length} />
              </section>

              <hr />

              <section className={'feed__comment__container'}>
                <Image
                  width={32}
                  height={32}
                  className={'my__profile__img'}
                  src={feed.user.profile || 'https://picsum.photos/300/300'}
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
            </li>
          )
        })}
      </ul>
    </article>
  )
}
