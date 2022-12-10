import FilterButton from '@/components/board/FilterButton'
import FollowedArtist from '@/components/board/FollowedArtist'
import PostList from '@/components/board/PostList'
import SideFilterMenu from '@/components/board/SideFilterMenu'
import SortSelector from '@/components/board/SortSelector'
import { usePostList } from '@/lib/hooks/usePostList'
import { useSortField } from '@/lib/hooks/useSortField'
import { useToggle } from '@/lib/hooks/useToggle'
import './BoardPost.scss'

export default function BoardPost() {
  const { value: showsFilterMenu, toggle: toggleFiterMenu } = useToggle(false)
  const { selected, setSelected } = useSortField()
  const { postList } = usePostList()

  const resultPostList = postList.filter(() => true).sort()

  return (
    <main className="main">
      <SideFilterMenu showsFilterMenu={showsFilterMenu} />
      <section className="dotto-section">
        <FollowedArtist />
        <article className="dotto-section__dotto-post-list">
          <div className="filter-wrapper">
            <SortSelector selected={selected} setSelected={setSelected} />
            <FilterButton onClick={toggleFiterMenu} />
          </div>
          <PostList list={resultPostList} />
        </article>
      </section>
    </main>
  )
}
