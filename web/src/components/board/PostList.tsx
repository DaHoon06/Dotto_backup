import { Link } from 'react-router-dom'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'
import TagChip from './TagChip'
import { DottoPost } from '@/services/post/getPost'
import React from 'react'

function PostList({ list }: { list?: DottoPost[] }) {
  return list ? (
    <>
      <ul className="post-list">
        {list.map((post, index) => {
          return (
            <li key={crypto.randomUUID()}>
              <Link
                className="post-list__post"
                to={`/dotto/board/view/${post.postNo}`}
              >
                <Image
                  className="post-image"
                  src={post.originName}
                  fallbackkImageSrc="https://picsum.photos/300/300"
                  alt={`${post.postNo} thumbnail`}
                />
                <div className="post-info">
                  <Typography fontColor="gray3" variant="caption">
                    {post.id}
                  </Typography>
                  <span className="flex-col gap-8">
                    <Typography
                      fontColor="gray1"
                      fontWeight="bold"
                      variant="body1"
                    >
                      {post.title}
                    </Typography>
                    <span className="prices">
                      <Typography
                        fontColor="gray1"
                        fontWeight="bold"
                        variant="body2"
                      >
                        {post.getSalesPrice()}원
                      </Typography>
                      <Typography
                        className="ml-16 mr-8 stroke"
                        variant="caption"
                        fontColor="gray3"
                      >
                        {post.getPrice()}원
                      </Typography>
                      <Typography
                        variant="caption"
                        fontColor="primary"
                        fontWeight="bold"
                      >
                        {post.salesPct}
                      </Typography>
                    </span>
                  </span>
                  <span className="flex gap-8">
                    {post.getTags().map((tag) => {
                      return <TagChip key={tag}>{tag}</TagChip>
                    })}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  ) : null
}

export default React.memo(PostList)
