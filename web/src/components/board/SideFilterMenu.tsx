import Button from '@/components/common/button/Button'
import Typography from '@/components/common/typography/Typography'
import FilterChip from '@/components/board/FilterChip'
import { ReactComponent as SearchIcon } from '@/assets/icons/nav/search.svg'

export default function SideFilterMenu({
  showsFilterMenu,
}: {
  showsFilterMenu: boolean
}) {
  return showsFilterMenu ? (
    <aside className="filter-menu">
      <div className="filter-menu__tag-filter">
        <Typography variant="body1" fontWeight="medium">
          #태그
        </Typography>
        <article className="tag-filter__tag-list">
          {[...new Array(5)].map((tag, i) => {
            return <FilterChip key={i}>{i.toString() + 'sdfs'}</FilterChip>
          })}
        </article>
      </div>
      <hr />
      <div className="filter-menu__location-filter">
        <Typography variant="body1" fontWeight="medium">
          지역
        </Typography>
        <form className="location-search-form">
          <input placeholder="검색" type="text" />
          <SearchIcon />
        </form>
        <article className="location-filter__tag-list">
          {[...new Array(10)].map((history, i) => {
            return (
              <FilterChip
                variant="location"
                key={i}
                onClcikCloseButton={() => {}}
              >
                {i.toString() + 'wef'}
              </FilterChip>
            )
          })}
          <span className="fade-out-filter" />
        </article>
      </div>
      <div className="button-wrapper">
        <Button className="reset-buutton" variant="white">
          초기화
        </Button>
        <Button className="result-button" variant="black">
          결과보기
        </Button>
      </div>
    </aside>
  ) : (
    <aside />
  )
}
