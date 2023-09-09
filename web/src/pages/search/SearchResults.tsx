import '@/pages/search/SearchResults.scss'
import { SideMenu } from '@/components/search/SideMenu'
import { Outlet, useParams } from 'react-router'
import { useEffect, useState } from 'react'

export const SearchResults = () => {
  const [keyword, setKeyword] = useState('')
  const params = useParams()

  useEffect(() => {
    const { keyword: param } = params
    if (param) setKeyword(param)
  }, [])

  return (
    <main className={'search-result--container'}>
      <SideMenu />
      <Outlet />
    </main>
  )
}
