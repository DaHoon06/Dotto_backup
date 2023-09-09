import FilterButton from '@/components/board/FilterButton'
import FollowedArtist from '@/components/board/FollowedArtist'
import PostList from '@/components/board/PostList'
import SideFilterMenu from '@/components/board/SideFilterMenu'
import FetchNext from '@/components/common/fetch-next/FetchNext'
import { useToggle } from '@/lib/hooks/useToggle'
import { useInfinitePosts } from '@/services/post/getPost'
import './BoardPost.scss'

export default function BoardPost() {
  const { value: showsFilterMenu, toggle: toggleFiterMenu } = useToggle(false)
  //   const { selected, setSelected } = useSortField()
  const { data: resultPostList, fetchNextPage } = useInfinitePosts({ size: 12 })

  return (
    <main className="main">
      <SideFilterMenu showsFilterMenu={showsFilterMenu} />
      <section className="dotto-section">
        <FollowedArtist />
        <article className="dotto-section__dotto-post-list">
          <div className="filter-wrapper">
            {/* TODO: 정렬 서버측 시간값 없음 */}
            {/* <SortSelector selected={selected} setSelected={setSelected} /> */}
            <FilterButton onClick={toggleFiterMenu} />
          </div>
          <PostList list={resultPostList} />
          <FetchNext fetchNext={fetchNextPage} />
        </article>
      </section>
      <aside />
    </main>
  )
}
