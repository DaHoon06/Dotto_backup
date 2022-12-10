import { Link } from 'react-router-dom'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'
import TagChip from './TagChip'

export default function PostList({ list }: { list: any[] }) {
  return (
    <ul className="post-list">
      {[...new Array(20)].map((post, i) => {
        return (
          <li key={post?.id}>
            <Link className="post-list__post" to={`post/${post?.id}`}>
              <Image
                className="post-image"
                src={post?.image || 'https://picsum.photos/300/300'}
                alt={`${post} thubnail`}
              />
              <div className="post-info">
                <Typography fontColor="gray3" variant="caption">
                  {post?.artist_name || 'artist - name'}
                </Typography>
                <span className="flex-col gap-8">
                  <Typography
                    fontColor="gray1"
                    fontWeight="bold"
                    variant="body1"
                  >
                    {post?.title || 'title'}
                  </Typography>
                  <span className="prices">
                    <Typography
                      fontColor="gray1"
                      fontWeight="bold"
                      variant="body2"
                    >
                      {post?.artist_name || '판매가'}
                    </Typography>
                    <Typography
                      className="ml-16 mr-8"
                      variant="caption"
                      fontColor="gray3"
                    >
                      {post?.title || '원래가격'}
                    </Typography>
                    <Typography
                      variant="caption"
                      fontColor="primary"
                      fontWeight="bold"
                    >
                      {post?.artist_name || '할인율'}
                    </Typography>
                  </span>
                </span>
                <span className="flex gap-8">
                  {/* {post?.tags?.map((tag: any) => { */}
                  {[...new Array(3)].map((tag: any) => {
                    return <TagChip key={tag?.id}>{`태그 1`}</TagChip>
                  })}
                </span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
