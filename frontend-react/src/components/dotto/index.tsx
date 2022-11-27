import './index.scss'

export const Dotto = () => {
  return (
    <article className="dotto mt-32">
      <section className="card-layout mb-32">
        <figure className="board-img-wrapper"></figure>
        <section className="board-info">
          <p className="board-writer">tattoist</p>
          <p className="board-title mt-16">반짝이와 패턴 (도안 수정 가능)</p>
          <p className="mt-8">
            <span className="event-price">5만원</span>
            <span className="origin-price">10만</span>
            <span className="percent">50%</span>
          </p>
          <p className="tag-container mt-16">
            <span className="tag mr-8">서울 홍대</span>
            <span className="tag mr-8">라인워크</span>
            <span className="tag">미니타투</span>
          </p>
        </section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>

      <section className="card-layout">
        <section>IMAGE</section>
        <section>WRITER</section>
      </section>
    </article>
  )
}
