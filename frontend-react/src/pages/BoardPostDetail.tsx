import { useParams } from 'react-router'
import styles from './BoardPostDetail.module.scss'
import BoardStickyHeader from '@/components/board-detail/BoardStickyHeader'
import MainSection from '@/components/board-detail/MainSection'
import RecommendedSection from '@/components/board-detail/RecommendedSection'
import CommunitySection from '@/components/board-detail/CommunitySection'

export default function BoardPostDetail() {
  const { postNo } = useParams()

  return (
    <>
      <BoardStickyHeader postId="" />
      <main className={styles.main}>
        <MainSection />
        <RecommendedSection />
        <CommunitySection />
      </main>
    </>
  )
}
