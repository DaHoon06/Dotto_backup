import Modal from '@/components/common/modal/Modal'
import { useEffect, useState } from 'react'
import { Login } from '@/components/login'

export const Status = () => {
  const [open, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const getToken = window.sessionStorage.getItem('accessToken')

  useEffect(() => {
    if (getToken) setIsLogin(true)
    else setIsLogin(false)
  }, [getToken])

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = (payload: boolean) => {
    setOpen(payload)
  }

  const logout = () => {
    window.sessionStorage.clear()
  }

  return (
    <article className="nav-status-container">
      {isLogin ? (
        <section className="button--wrapper">
          <button type={'button'} onClick={logout}>
            Logout
          </button>
        </section>
      ) : (
        <section className="button--wrapper">
          <button type={'button'} onClick={openModal}>
            Login
          </button>
        </section>
      )}
      <Modal isOpen={open}>
        <Login closeModal={closeModal} />
      </Modal>
    </article>
  )
}
