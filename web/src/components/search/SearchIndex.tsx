import { UserPreview } from '@/components/user/UserPreview'
import { BoardLabel } from '@/components/board/BoardLabel'
import PostList from '@/components/board/PostList'
import { useEffect, useState } from 'react'
import { ins as axios } from '@/lib/axios'
import { useLocation } from 'react-router'
import qs from 'qs'
import { LABEL } from '@/constants/placeholders'
import Typography from '@/components/common/typography/Typography'

export const SearchIndex = () => {
  const location = useLocation()
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })
  const [userLists, setUserLists] = useState([])
  const [artistLists, setArtistLists] = useState([])
  const [dottoLists, setDottoLists] = useState([])

  useEffect(() => {
    const { keyword: queryKeyword } = query

    const load = async () => {
      const { data } = await axios.get(`/search/${queryKeyword}`)
      console.log(data)
      const { result } = data
      const { memberList, artistList, dottoPostList } = result.data
      setUserLists(memberList)
      setArtistLists(artistList)
      setDottoLists(dottoPostList)
    }
    load()
  }, [location])

  return (
    <>
      <article className={'search-result__body'}>
        <section className={'search-result__body--group '}>
          <UserPreview
            list={artistLists}
            type={'artist'}
            label={LABEL.ARTIST}
          />
        </section>

        <section className={'search-result__body--group'}>
          <UserPreview list={userLists} type={'user'} label={LABEL.USER} />
        </section>
        <section className={'search-result__body--group'}>
          <BoardLabel
            title={LABEL.DOTTO_TITLE}
            subTitle={LABEL.DOTTO_SUB_TITLE}
            type={'home'}
          />
          {dottoLists.length > 0 ? (
            <PostList list={dottoLists} />
          ) : (
            <Typography variant={'body1'} className={'center pt-50'}>
              등록된 게시글이 없습니다.
            </Typography>
          )}
        </section>
        {/*<section className={'search-result__body--group'}>*/}
        {/*  <BoardLabel*/}
        {/*    title={LABEL.BOARD_TITLE}*/}
        {/*    subTitle={LABEL.BOARD_SUB_TITLE}*/}
        {/*    type={'etc'}*/}
        {/*  />*/}
        {/*  <PostList list={dummy} />*/}
        {/*</section>*/}
      </article>
    </>
  )
}
