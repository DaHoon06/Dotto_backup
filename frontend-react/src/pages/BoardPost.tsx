import Typography from '@/components/common/typography/Typography'
import { ReactComponent as SearchIcon } from '@/assets/icons/nav/search.svg'
import './BoardPost.scss'
import FilterChip from '@/components/board/FilterChip'
import Button from '@/components/common/button/Button'
import Image from '@/components/common/image/Image'
import DEFAULT_PROFILE_IMAGE from '@/assets/img/ic-profile-40.svg'
import MORE_IMAGE from '@/assets/icons/common/plus_icon.svg'
import Details from '@/components/common/details/Details'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ReactComponent as DropDownIcon } from '@/assets/icons/common/btn-dropdown-24.svg'
import { ReactComponent as FilterIcon } from '@/assets/icons/main/filter.svg'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function BoardPost() {
  const [selected, setSelected] = useState(people[0])

  return (
    <main className="main">
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
      <section className="dotto-section">
        <Details>
          <Details.Summary>
            <Typography variant="sub1" fontColor="gray1">
              팔로우한 아티스트
            </Typography>
          </Details.Summary>
          <Details.Contents>
            <ul className="artist-list">
              {[...new Array(5)].map((artist, i) => {
                return (
                  <li key={i} className="followed-artists__artist">
                    <Image
                      className="followed-artists__artist"
                      src={
                        i % 2 === 0
                          ? artist?.image
                          : 'https://picsum.photos/300/300'
                      }
                      alt={artist?.name}
                      fallbackkImageSrc={DEFAULT_PROFILE_IMAGE}
                    />
                    <Typography
                      variant="body2"
                      fontWeight="regular"
                      fontColor="gray2"
                    >
                      {artist?.name}asdasfqwefweklfj
                    </Typography>
                  </li>
                )
              })}
              <li>
                <span className="more-button">
                  <img src={MORE_IMAGE} alt="" />
                </span>
                <Typography
                  variant="body2"
                  fontWeight="regular"
                  fontColor="gray2"
                >
                  MORE
                </Typography>
              </li>
            </ul>
          </Details.Contents>
        </Details>
        <article className="dotto-section__dotto-post-list">
          <div className="filter-wrapper">
            <Listbox value={selected} onChange={setSelected}>
              <div>
                <Listbox.Button className="select flex gap-8 px-8 py-4">
                  <Typography
                    variant="body1"
                    fontWeight="medium"
                    fontColor="gray1"
                    as="span"
                  >
                    {selected.name}
                  </Typography>
                  <DropDownIcon className="select-dropdown" />
                </Listbox.Button>
                <Listbox.Options className="select__options">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) => ''}
                      value={person}
                    >
                      {({ selected }) => (
                        <span key={person.name}>{person.name}</span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            <div className="select flex gap-8 px-8 py-4">
              <Typography
                variant="body1"
                fontWeight="bold"
                fontColor="gray1"
                as="span"
              >
                FILTER
              </Typography>
              <FilterIcon />
            </div>
          </div>
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
                          return (
                            <Typography
                              className="tagchip"
                              fontColor="gray2"
                              variant="caption"
                              key={tag?.id}
                            >{`태그 1`}</Typography>
                          )
                        })}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </article>
      </section>
    </main>
  )
}
