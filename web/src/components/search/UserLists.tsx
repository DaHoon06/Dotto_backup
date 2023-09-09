import { Link } from 'react-router-dom'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'
import Button from '@/components/common/button/Button'
import '@/components/search/UserResults.scss'

export const UserLists = () => {
  const follow = () => {
    console.log('롸')
  }

  return (
    <ul className="post-list">
      {[...new Array(20)].map((post, i) => {
        return (
          <li key={post?.id || i}>
            <Link className="post-list__post" to={`post/${post?.id}`}>
              <Image
                className="post-image"
                src={post?.image || 'https://picsum.photos/300/300'}
                alt={`${post} thubnail`}
              />
              <div className="post-info">
                <Typography
                  fontColor="gray1"
                  variant="sub2"
                  fontWeight={'medium'}
                >
                  {post?.nickname || 'username_1000'}
                </Typography>
                <span className="flex-col gap-8">
                  <Typography
                    fontColor="gray3"
                    fontWeight="regular"
                    variant="body2"
                  >
                    팔로우 {post?.follow || '1,980'}
                  </Typography>
                </span>
              </div>
            </Link>
            <span className="flex-col gap-8">
              <Button
                className={'follow__button'}
                type={'button'}
                variant={'gray'}
                onClick={follow}
              >
                <Typography variant={'body1'} fontWeight={'medium'}>
                  팔로우
                </Typography>
              </Button>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
