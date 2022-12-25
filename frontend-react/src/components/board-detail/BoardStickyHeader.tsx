import Typography from '../common/typography/Typography'
import styles from './BoardStickyHeader.module.scss'
import { ReactComponent as PinIcon } from '@/assets/icons/board/dotto/pin.svg'
import Button from '../common/button/Button'
import StickyHeader from '../layout/StickyHeader'
import { Link } from 'react-router-dom'
import { buttonStyles } from '../common'

interface IBoardStickyHeader {
  postId: string
}

export default function BoardStickyHeader({ postId }: IBoardStickyHeader) {
  return (
    <StickyHeader>
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
          <Link className={buttonStyles.primary} to={`/request/${postId}`}>
            의뢰하기
          </Link>
        </span>
      </div>
    </StickyHeader>
  )
}
