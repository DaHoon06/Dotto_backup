import Modal from '@/components/common/modal/Modal'
import React, { useEffect, useState } from 'react'
import { Login } from '@/components/login'
import { Register } from '@/pages/register'
import Typography from '@/components/common/typography/Typography'
import PROFILE from '@/assets/icons/default.svg'
import Image from '@/components/common/image/Image'
import { DropMenu } from '@/components/common/header/DropMenu'
import { Notification } from '@/components/common/header/Notification'

interface Props {
  modal: boolean
  showModal: (payload: boolean) => void
}

export const Status = (props: Props) => {
  const { modal, showModal } = props
  const [open, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [componentType, setComponentType] = useState('login')

  //TODO: AuthProvider 활용하는 방향으로
  // 수정
  const getToken = window.sessionStorage.getItem('accessToken')

  useEffect(() => {
    setOpen(modal)
  }, [modal])

  useEffect(() => {
    if (!!getToken) setIsLogin(true)
    else setIsLogin(false)
  }, [getToken])

  const openModal = () => {
    setOpen(true)
    scrollFixed()
  }

  const scrollFixed = () => {
    const body = document.querySelector('body')
    if (body)
      !open ? (body.style.overflow = 'hidden') : (body.style.overflow = '')
  }

  const closeModal = (payload: boolean) => {
    showModal(!open)
    modalRest()
    scrollFixed()
  }

  const modalRest = () => {
    setComponentType('login')
  }

  const components = (type: string) => {
    setComponentType(type)
  }

  const setLogout = (payload: boolean) => {
    setIsLogin(payload)
  }

  // const style = {
  //   loginForm: {
  //     width: '100%',
  //     height: '100%',
  //     borderRadius: 0,
  //   } as React.CSSProperties,
  //   registerForm: {
  //     width: '680px',
  //     height: '700px',
  //   } as React.CSSProperties,
  // }

  return (
    <article className="nav-status-container">
      {isLogin ? (
        <section className="profile-box pr-40">
          <Notification />
          <section className={'flex items-center'}>
            <div className={'profile--wrapper pl-26'}>
              <Image alt={'profile'} src={PROFILE} width={38} height={38} />
              <Typography
                className={'pt-8'}
                variant={'caption'}
                fontColor={'gray1'}
              >
                profile
              </Typography>
            </div>
            <DropMenu logout={setLogout} />
          </section>
        </section>
      ) : (
        <section className="button--wrapper">
          <button type={'button'} onClick={openModal}>
            <Typography variant={'caption'} fontColor={'gray1'}>
              Login
            </Typography>
          </button>
        </section>
      )}
      <Modal
        className={'mobile-form'}
        isOpen={open}
        onRequestClose={() => closeModal(false)}
      >
        {componentType === 'login' && (
          <Login closeModal={closeModal} changeComponent={components} />
        )}
        {componentType === 'register' && (
          <Register closeModal={closeModal} changeComponent={components} />
        )}
      </Modal>
    </article>
  )
}
