import { Tab, Menu } from '@headlessui/react'
import Image from '../common/image/Image'
import Typography from '../common/typography/Typography'
import styles from './CommunitySection.module.scss'
import { ReactComponent as MeatballIcon } from '@/assets/icons/board/dotto/meatballs.svg'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function CommunitySection() {
  const commentMenus = [
    { name: '수정', action() {} },
    { name: '삭제', action() {} },
    { name: '신고', action() {} },
  ]

  return (
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
                      <Image className={styles.commentProfileImage} alt="" />
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
                                    <div onClick={menu.action}>{menu.name}</div>
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
  )
}
