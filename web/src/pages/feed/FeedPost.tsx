import { Link } from 'react-router-dom'
import LOGO from '@/assets/icons/logo/dotto.svg'
import React from 'react'
import style from '@/pages/feed/Feed.module.scss'

export const FeedPost = () => {
  return (
    <>
      <header className={style.feed__header__posting}>
        <Link to="/">
          <img width={103} height={40} alt="닷투 로고" src={LOGO} />
        </Link>
      </header>
      <main className={style.feed__main}>TEST</main>
    </>
  )
}
