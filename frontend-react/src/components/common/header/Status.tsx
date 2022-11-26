export const Status = () => {
  const openModal = () => {
    console.log('모달')
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
    </article>
  )
}
