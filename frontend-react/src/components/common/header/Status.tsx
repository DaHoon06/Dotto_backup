import Modal from '@/components/common/modal/Modal'
import { useState } from 'react'
import { Login } from '@/components/login'

export const Status = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  return (
    <article className="nav-status-container">
      <section className="button--wrapper">
        <button type={'button'}>Logout</button>
      </section>
      <section className="button--wrapper">
        <button type={'button'} onClick={openModal}>
          Login
        </button>
      </section>

      <Modal isOpen={open}>
        <Login />
      </Modal>
    </article>
  )
}
