import style from '@/components/feed/RecommendedUser.module.scss'
import Typography from '@/components/common/typography/Typography'
import Image from '@/components/common/image/Image'
import cn from 'classnames'
import Button from '@/components/common/button/Button'

export const RecommendedUser = () => {
  return (
    <article className={style.recommend__user__container}>
      <Typography variant={'sub2'} fontColor={'black'} fontWeight={'regular'}>
        추천 계정
      </Typography>
      <ul>
        <li className={cn('pt-16 pb-16')}>
          <section className={style.user__profile}>
            <div className={'flex'}>
              <Image
                width={40}
                height={40}
                className={style.user__profile__img}
                src={'https://picsum.photos/300/300'}
                alt={`thubnail`}
              />
              <div>
                <Typography
                  variant={'body1'}
                  fontWeight={'bold'}
                  fontColor={'black'}
                >
                  타투이스트 이름
                </Typography>
                <div className={cn('flex')}>
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
                    팔로워 1,000 명
                  </Typography>
                </div>
              </div>
            </div>
            <Button variant={'gray-outline'}>
              <Typography
                fontWeight={'medium'}
                fontColor={'gray2'}
                variant={'body1'}
              >
                팔로잉
              </Typography>
            </Button>
          </section>
        </li>

        <li className={cn('pt-16 pb-16')}>
          <section className={style.user__profile}>
            <div className={'flex'}>
              <Image
                width={40}
                height={40}
                className={style.user__profile__img}
                src={'https://picsum.photos/300/300'}
                alt={`thubnail`}
              />
              <div>
                <Typography
                  variant={'body1'}
                  fontWeight={'bold'}
                  fontColor={'black'}
                >
                  타투이스트 이름
                </Typography>
                <div className={cn('flex')}>
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
                    팔로워 1,000 명
                  </Typography>
                </div>
              </div>
            </div>
            <Button variant={'gray-outline'}>
              <Typography
                fontWeight={'medium'}
                fontColor={'gray2'}
                variant={'body1'}
              >
                팔로잉
              </Typography>
            </Button>
          </section>
        </li>

        <li className={cn('pt-16 pb-16')}>
          <section className={style.user__profile}>
            <div className={'flex'}>
              <Image
                width={40}
                height={40}
                className={style.user__profile__img}
                src={'https://picsum.photos/300/300'}
                alt={`thubnail`}
              />
              <div>
                <Typography
                  variant={'body1'}
                  fontWeight={'bold'}
                  fontColor={'black'}
                >
                  타투이스트 이름
                </Typography>
                <div className={cn('flex')}>
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
                    팔로워 1,000 명
                  </Typography>
                </div>
              </div>
            </div>
            <Button variant={'gray-outline'}>
              <Typography
                fontWeight={'medium'}
                fontColor={'gray2'}
                variant={'body1'}
              >
                팔로잉
              </Typography>
            </Button>
          </section>
        </li>
      </ul>
    </article>
  )
}
