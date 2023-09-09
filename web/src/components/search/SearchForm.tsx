import cn from 'classnames'
import SEARCH from '@/assets/icons/nav/search.svg'
import Typography from '@/components/common/typography/Typography'
import React, { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import '@/components/search/SearchForm.scss'

interface ISearchForm {
  showSearch: boolean
  closeSearchBar: (payload: boolean) => void
}

export const SearchForm = (props: ISearchForm) => {
  const { showSearch, closeSearchBar } = props
  const [cookies, setCookie, removeCookie] = useCookies(['keyword'])
  const [keyword, setKeyword] = useState('')
  const [keywordList, setKeywordList] = useState<Array<string>>([])
  const navigate = useNavigate()
  const ele = useRef<any>(null)
  const date = new Date()
  const expires1Month = new Date(date.getMonth() + 1)

  useEffect(() => {
    getKeywordList()
  }, [keyword])

  const getKeywordList = () => {
    try {
      const getKeywordLists = cookies['keyword']
      if (getKeywordLists !== undefined && getKeywordLists !== null) {
        let keywordLists: string[] = []
        if (typeof getKeywordLists === 'string')
          keywordLists = getKeywordLists.split(',')
        else keywordLists = getKeywordLists
        setKeywordList([...keywordLists])
      }
    } catch (e) {
      console.log(e)
    }
  }

  const onChangeKeyword = (e: { target: HTMLInputElement }) => {
    const { value } = e.target
    setKeyword(value)
  }

  const handleClickSearchBar = () => {
    setKeyword('')
    if (!showSearch) closeSearchBar(!showSearch)
  }

  const searchBarClose = () => {
    closeSearchBar(!showSearch)
  }

  const searchBarCloseOuter = (e: React.MouseEvent) => {
    const { target } = e
    if (ele && !ele.current.contains(target)) {
      if (showSearch) searchBarClose()
    }
  }

  const setCookies = (keyword: string[]) => {
    setCookie('keyword', `${keyword}`, { path: '/', expires: expires1Month })
  }

  const search = (e: React.FormEvent) => {
    e.preventDefault()
    if (keyword.length > 0) {
      if (keywordList.length >= 6)
        setKeywordList([...keywordList.slice(1), keyword])
      else setKeywordList([...keywordList, keyword])
      setCookies(keywordList)
    }
    navigate(`/search/result?keyword=${keyword}`)
    closeSearchBar(!showSearch)
  }

  const keywordClear = () => {
    removeCookie('keyword')
    setKeywordList([])
  }
  const selectedKeyword = (keyword: string) => {
    setKeyword(keyword)
    navigate(`/search/result?keyword=${keyword}`)
    closeSearchBar(!showSearch)
  }

  return (
    <form onSubmit={search} className="search-bar--container">
      <input
        type="text"
        placeholder="Search"
        className={cn(
          showSearch ? 'search-bar--active show' : '',
          'search-bar'
        )}
        value={keyword}
        name="keyword"
        onClick={handleClickSearchBar}
        onChange={onChangeKeyword}
        autoComplete="search"
      />
      <button
        type="button"
        className={cn(showSearch ? 'on' : '', 'search__button off')}
        onClick={handleClickSearchBar}
      >
        <img alt="검색 버튼" src={SEARCH} width={20} height={20} />
      </button>

      <article
        className={cn(
          showSearch
            ? 'search-bar--in-dropdown search-bar__background--blur'
            : 'search-bar--out-dropdown hide',
          'keyword-container'
        )}
        onClick={searchBarCloseOuter}
      >
        <article className={'list-group'} ref={ele}>
          <section className="keyword-container--list">
            {keywordList.length > 0 ? (
              <section>
                <div className={'flex justify-between'}>
                  <Typography
                    variant={'body1'}
                    fontColor={'gray4'}
                    fontWeight={'medium'}
                  >
                    최근 검색어
                  </Typography>
                  <button type={'button'} onClick={keywordClear}>
                    <Typography
                      variant={'body1'}
                      fontColor={'gray4'}
                      fontWeight={'medium'}
                    >
                      모두지우기
                    </Typography>
                  </button>
                </div>
                <ul className={'search-list'}>
                  {keywordList.map((item, index) => {
                    return (
                      <li key={index}>
                        <span onClick={() => selectedKeyword(item)}>
                          <Typography variant={'sub2'} fontWeight={'medium'}>
                            {item}
                          </Typography>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ) : (
              <Typography
                className={'no-keyword--text'}
                fontColor={'gray2'}
                variant={'body1'}
              >
                검색된 검색어가 존재하지 않습니다.
              </Typography>
            )}
          </section>
        </article>
      </article>
    </form>
  )
}
