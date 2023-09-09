import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Typography from '@/components/common/typography/Typography'
import { UserLists } from '@/components/search/UserLists'
import qs from 'qs'

export const UserResults = () => {
  const location = useLocation()
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })
  const [category, setCategory] = useState<string>('')

  useEffect(() => {
    const { category: getCategory } = query
    if (getCategory) setCategory(getCategory as string)
  }, [location])

  return (
    <article className={'search-result__body'}>
      <section className={'flex items-center pb-24'}>
        <Typography variant={'sub1'} fontColor={'gray1'}>
          검색결과
        </Typography>
        <Typography className={'pl-8'} variant={'sub2'} fontColor={'gray3'}>
          18,000
        </Typography>
      </section>
      <UserLists />
    </article>
  )
}
