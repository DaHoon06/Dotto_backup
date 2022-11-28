import './index.scss'

export const Login = () => {
  return (
    <article className="login">
      <section className="logo--wrapper login--group">
        <img alt="logo" className="logo" />
      </section>

      <article className="login--group">
        <form>
          <section className="login__items--wrapper">
            <input className="login__input" type="text" placeholder="아이디" />
          </section>
          <section className="login__items--wrapper">
            <input
              className="login__input"
              type="password"
              placeholder="비밀번호"
            />
          </section>
          <p className="warning-message">에러 메세지</p>
          <section className="check-box--wrapper pl-33 mb-10">
            <input type="checkbox" id="save" />
            <label htmlFor="save" />
            <span className={'save-id--text'}>아이디 저장</span>
          </section>
          <section className="login__items-wrapper">
            <button className="login__button" type="submit">
              로그인
            </button>
          </section>
        </form>
      </article>

      <article className="login--group">
        <img className="social-login--line" alt="간편로그인 /" />
        <article className="social-login__button--group">
          <section className="login__items--wrapper">
            <button type="button" className="kakao__button">
              <img alt="카카오 로그인 이미지" />
            </button>
          </section>

          <section className="login__items--wrapper">
            <button type="button" className="google__button">
              <img alt="구글 로그인 이미지" />
            </button>
          </section>
        </article>
      </article>

      <article className="login-route--group">
        <section className="find-password">
          <a className="route-text" href="/">
            비밀번호 찾기
          </a>
        </section>
        <section className="division">|</section>
        <section className="join">
          <button type={'button'} className="route-text">
            회원가입 하기
          </button>
        </section>
      </article>
    </article>
  )
}
