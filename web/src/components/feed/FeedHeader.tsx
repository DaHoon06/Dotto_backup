import LOGO from '@/assets/icons/logo/dotto.svg'
import { Link } from 'react-router-dom'
import React from 'react'
import { Bottom } from '@/components/common/header/Bottom'
import style from '@/components/feed/FeedHeader.module.scss'
import FilterButton from '@/components/board/FilterButton'
import SortSelector from '@/components/board/SortSelector'
import { useSortField } from '@/lib/hooks/useSortField'
import cn from 'classnames'

export const FeedHeader = () => {
  const { selected, setSelected } = useSortField()

  const filter = () => {
    console.log('롸')
  }

  return (
    <header className={cn(style.feed__header)}>
      <nav className={style.feed__container}>
        <div className={style.feed__nav}>
          <Link to="/">
            <img width={103} height={40} alt="닷투 로고" src={LOGO} />
          </Link>
          <Bottom className={'pt-8 pl-24'} />
        </div>
        <div className={style.feed__sort}>
          <SortSelector selected={selected} setSelected={setSelected} />
          <FilterButton onClick={filter} />
        </div>
      </nav>
    </header>
  )
}
