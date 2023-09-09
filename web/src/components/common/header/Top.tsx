import React, { useEffect, useState } from 'react'
import CLOSE from '@/assets/icons/nav/x-button.svg'
import MENU from '@/assets/icons/hamburger-menu.svg'
import { Link } from 'react-router-dom'
import { SearchForm } from '@/components/search/SearchForm'
import Image from '@/components/common/image/Image'
import { Logo } from '@/components/common/icons/Logo'

interface Props {
  showMenu: (payload: boolean) => void
  open: boolean
}

export const Top = (props: Props) => {
  const { showMenu, open } = props
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    scrollFixed()
  }, [showSearch])

  const closeSearchBar = (payload: boolean) => {
    if (payload) showMenu(!payload)
    setShowSearch(payload)
  }

  const scrollFixed = () => {
    const body = document.querySelector('body')
    if (body)
      showSearch ? (body.style.overflow = 'hidden') : (body.style.overflow = '')
  }

  const onClickHandlerOpenMenu = () => {
    showMenu(!open)
  }

  return (
    <article className="top-container">
      <section className="logo-wrapper">
        <Link to="/">
          <Logo className={'logo'} />
        </Link>
      </section>

      <SearchForm showSearch={showSearch} closeSearchBar={closeSearchBar} />

      {showSearch && (
        <section className="search-bar__button--close">
          <button type="button" onClick={() => closeSearchBar(!showSearch)}>
            <Image alt="검색 닫기" src={CLOSE} width={18} height={18} />
          </button>
        </section>
      )}
      {!showSearch && (
        <button
          className={'hamburger-menu'}
          type={'button'}
          onClick={onClickHandlerOpenMenu}
        >
          <Image width={28} alt={'메뉴버튼'} src={MENU} />
        </button>
      )}
    </article>
  )
}
