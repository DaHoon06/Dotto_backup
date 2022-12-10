import Button from '@/components/common/button/Button'
import Typography from '@/components/common/typography/Typography'
import { usePost } from '@/lib/hooks/usePost'
import { useParams } from 'react-router'
import styles from './BoardPostDetail.module.scss'
import { ReactComponent as PinIcon } from '@/assets/icons/board/dotto/pin.svg'
import { ReactComponent as MeatballIcon } from '@/assets/icons/board/dotto/meatballs.svg'
import Image from '@/components/common/image/Image'
import TagChip from '@/components/board/TagChip'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Menu, Tab } from '@headlessui/react'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function BoardPostDetail() {
  const { postNo } = useParams()
  const { post } = usePost(postNo)

  const commentMenus = [
    { name: '수정', action() {} },
    { name: '삭제', action() {} },
    { name: '신고', action() {} },
  ]

  return (
    <>
      <header className={styles.stickyHeader}>
        <div className={styles.headerWrapper}>
          <Typography variant="sub1" fontWeight="regular" fontColor="gray2">
            이 작업이 마음에 드시나요?
          </Typography>
          <span className="flex gap-16">
            <Button
              className={styles.button}
              icon={<PinIcon />}
              variant="primary-outline"
            >
              찜하기
            </Button>
            <Button className={styles.button} variant="primary">
              의뢰하기
            </Button>
          </span>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <article className={styles.mainInfo}>
            <div className="flex flex-col gap-16">
              <Image
                className={styles.mainImage}
                src="https://picsum.photos/400/400"
                alt="main item image"
              />

              <ul className="flex gap-8">
                {[...new Array(3)].map((v, i) => {
                  return (
                    <Image key={i} className={styles.imageItem} alt={`${i}`} />
                  )
                })}
              </ul>
            </div>
            <span className={styles.info}>
              <Typography variant="h2" fontColor="gray1" fontWeight="bold">
                제목
              </Typography>
              <Typography
                className="mt-12 mb-24"
                variant="body1"
                fontColor="gray2"
                fontWeight="medium"
              >
                조회수 56회
              </Typography>
              <div className="flex gap-12 items-center">
                <Typography
                  variant="h2"
                  fontColor="primary"
                  fontWeight="semibold"
                >
                  50,000
                </Typography>
                <Typography
                  variant="sub2"
                  fontColor="gray3"
                  fontWeight="medium"
                  className={styles.stroke}
                >
                  100,000
                </Typography>
              </div>
              <hr className="mt-12 mb-24" />
              <ul className="flex flex-col gap-10">
                {[...new Array(3)].map((v, i) => {
                  return (
                    <div className="flex gap-16 items-center" key={i + 3}>
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        fontColor="gray3"
                      >
                        제목
                      </Typography>
                      <Typography
                        variant="sub2"
                        fontWeight="regular"
                        fontColor="gray1"
                      >
                        제목
                      </Typography>
                    </div>
                  )
                })}
              </ul>

              <hr className="mt-14 mb-16" />
              <Typography fontColor="gray1" variant="sub2">
                매우긴문장매우긴문장매우긴문장매우긴매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장
              </Typography>
              <ul className="flex gap-12 mt-24 mb-60">
                {[...new Array(3)].map((v, i) => {
                  return (
                    <TagChip size="lg" key={i}>
                      {i}
                    </TagChip>
                  )
                })}
              </ul>
              <hr />
              {/* <ArtistInfo id="" /> */}
              <div className="flex gap-22 my-24">
                <Image
                  className={styles.artistImage}
                  alt="artist profile thubnail"
                />
                <span className="flex-col gap-1 flex-1">
                  <Typography
                    variant="sub2"
                    fontWeight="medium"
                    fontColor="gray1"
                  >
                    아티스트이름
                  </Typography>
                  <Typography variant="body1" fontColor="gray1">
                    팔로워 123만명
                  </Typography>
                </span>
                <Button variant="gray">팔로우</Button>
              </div>
              <hr />
            </span>
          </article>
        </section>
        <section className={styles.recommendSection}>
          <Typography variant="h3" fontWeight="medium" fontColor="gray1">
            이 아티스트의 다른 작품 보기
          </Typography>
          <div>
            <Swiper
              spaceBetween={16}
              slidesPerView={4}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {[...new Array(10)].map((v, i) => {
                return (
                  <SwiperSlide key={i + 1}>
                    <Image className={styles.recommendPost} alt={`${i}`} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </section>

        <section className={styles.communitySection}>
          <Tab.Group>
            <Tab.List className="flex">
              {['댓글', '리뷰'].map((v, i) => {
                return (
                  <Tab
                    className={({ selected }) => cx(styles.tab, { selected })}
                    key={i}
                    as="span"
                  >
                    <Typography variant="h3" as="span" fontColor="gray4">
                      {v}
                    </Typography>
                    <Typography variant="sub2" as="span" fontColor="gray4">
                      1200
                    </Typography>
                  </Tab>
                )
              })}
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <ul className="flex-col gap-20">
                  {[...new Array(5)].map((comment) => {
                    return (
                      <li key={comment?.id} className="flex-col">
                        <div className="flex items-start px-16 py-24 gap-32">
                          <Image
                            className={styles.commentProfileImage}
                            alt=""
                          />
                          <span className="flex-col flex-1 gap-12">
                            <span className="flex gap-8">
                              <Typography
                                variant="sub2"
                                fontColor="gray1"
                                fontWeight="medium"
                              >
                                닉네임 123
                              </Typography>
                              <Typography
                                variant="sub2"
                                fontColor="gray3"
                                fontWeight="medium"
                              >
                                {new Date().toLocaleDateString()}
                              </Typography>
                            </span>
                            <Typography
                              variant="sub2"
                              fontColor="gray1"
                              fontWeight="medium"
                            >
                              엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용엄청긴댓글내용
                            </Typography>
                          </span>
                          <Menu as="div" className={styles.menu}>
                            <Menu.Button>
                              <MeatballIcon
                                width={32}
                                height={32}
                                className={styles.meatball}
                              />
                            </Menu.Button>
                            <Menu.Items className={styles.menuItems}>
                              {commentMenus.map((menu) => {
                                return (
                                  <Menu.Item key={menu.name}>
                                    {({ active }) => {
                                      return (
                                        <div onClick={menu.action}>
                                          {menu.name}
                                        </div>
                                      )
                                    }}
                                  </Menu.Item>
                                )
                              })}
                            </Menu.Items>
                          </Menu>
                        </div>
                        <div className="flex gap-16">
                          {true &&
                            [...new Array(3)].map((v, i) => {
                              return (
                                <Image
                                  className={styles.reveiwImage}
                                  key={i}
                                  alt="review thumbnail"
                                />
                              )
                            })}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </Tab.Panel>
              <Tab.Panel>sdfasd2</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </main>
    </>
  )
}
