import { Top } from '@/components/common/header/Top'
import { Bottom } from '@/components/common/header/Bottom'
import { Status } from '@/components/common/header/Status'
import './Header.scss'
import { SideMenu } from '@/components/common/side-menu/SideMenu'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const Header = () => {
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setOpenMenu(false)
    setOpenModal(false)
  }, [location])

  useEffect(() => {
    const handleSize = () => {
      const width = window.innerWidth
      if (width > 767) {
        setOpenMenu(false)
      }
    }
    window.addEventListener('resize', handleSize)
    handleSize()
  }, [])

  useEffect(() => {
    scrollCheck()
  }, [openMenu, openModal, location])

  const scrollCheck = () => {
    const html = document.querySelector('html')
    if (html) {
      openMenu || openModal
        ? (html.style.overflow = 'hidden')
        : (html.style.overflow = '')
    }
  }

  const showMenu = (payload: boolean) => {
    setOpenMenu(payload)
  }

  const showModal = (payload: boolean) => {
    if (payload) setOpenMenu(false)
    setOpenModal(!openModal)
  }

  return (
    <>
      <header className="header">
        <Top showMenu={showMenu} open={openMenu} />
        <Status modal={openModal} showModal={showModal} />
        <Bottom />
      </header>
      <SideMenu open={openMenu} showModal={showModal} showMenu={showMenu} />
    </>
  )
}
