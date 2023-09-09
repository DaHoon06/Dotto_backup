import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-top">
        <section>
          <h1>고객센터</h1>
          <ul>
            <li>운영시간 AM 10:00 - PM 06:00</li>
            <li>점심시간 PM 12:00 - PM 01:00</li>
            <li>주말,공휴일 휴무 입니다.</li>
          </ul>
        </section>
        <section>
          <h1>마이피드</h1>
          <ul>
            <li>로그인</li>
            <li>예약내역조회</li>
            <li>피드로 이동</li>
          </ul>
        </section>
        <section>
          <h1>서비스</h1>
          <ul>
            <li>FAQ</li>
            <li>공지사항</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>사업자정보확인</li>
          </ul>
        </section>
      </article>

      <article className="footer-bottom">
        <h1>2022 Dotto, All rights reserved.</h1>
      </article>
    </footer>
  )
}
