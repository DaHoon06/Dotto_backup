import './FeedPostButton.scss'
import POSTING from '@/assets/icons/common/plus_icon.svg'
import Image from '@/components/common/image/Image'
import { Link } from 'react-router-dom'

export const FeedPostButton = () => {
  return (
    <button className={'feed-post__button'} type={'button'}>
      <Link to={'/feed/post'}>
        <Image alt={'feed posting'} src={POSTING} width={24} height={24} />
      </Link>
    </button>
  )
}
