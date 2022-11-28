import './index.scss'
import LOGO from '@/assets/icons/logo/dotto.svg'
import { KAKAO, GOOGLE, LINE } from '@/assets/icons/social'
import React, { useEffect, useState } from 'react'
import { ins as axios } from '@/lib/axios'

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  })
  const [loginErrorMsg, setLoginErrorMsg] = useState('')
  const [saveId, setSaveId] = useState(false)
  const { id, password } = loginInfo

  useEffect(() => {
    setLoginErrorMsg('')
  }, [loginInfo])

  const onChangeHandler = async (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    })
  }

  const login = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('/sign-in', loginInfo)
      const { success } = data
      if (success) {
        //TODO: 토큰 저장
        setLoginErrorMsg('')
      } else setLoginErrorMsg('로그인에 실패했습니다. 다시 입력해주세요.')
    } catch (e) {
      console.log(e)
    }
  }

  const checkBoxHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(saveId)
    setSaveId(!saveId)
    checkedItemHandler(target.checked)
  }

  const checkedItemHandler = (checked: boolean) => {
    if (checked) {
      console.log('아이디 저장')
    }
  }

  return (
    <article className="login">
      <section className="logo--wrapper login--group pt-26">
        <img alt="logo" className="logo" src={LOGO} width={132} height={52} />
      </section>

      <article className="login--group">
        <form>
          <section className="login__items--wrapper">
            <input
              className="login__input"
              type="text"
              autoComplete="username"
              placeholder="아이디"
              onChange={onChangeHandler}
              value={id}
              name={'id'}
            />
          </section>
          <section className="login__items--wrapper mt-16">
            <input
              className="login__input"
              type="password"
              autoComplete="new-password"
              placeholder="비밀번호"
              name={'password'}
              onChange={onChangeHandler}
              value={password}
            />
          </section>
          <p className="warning-message">{loginErrorMsg}</p>
          <section className="check-box--wrapper mb-10">
            <div>
              <input
                onChange={(e) => checkBoxHandler(e)}
                checked={saveId}
                type="checkbox"
                id="saveId"
              />
              <label htmlFor="saveId" />
              <label htmlFor="saveId" className={'save-id--text'}>
                아이디 저장
              </label>
            </div>
          </section>
          <section className="login__items-wrapper mt-24">
            <button className="black__button" type="submit" onClick={login}>
              로그인
            </button>
          </section>
        </form>
      </article>

      <article className="login--group mt-32">
        <img className="social-login--line" src={LINE} alt="간편로그인 /" />

        <article className="social-login__button--group pt-24">
          <section className="login__items--wrapper">
            <button type="button" className="kakao__button">
              <img
                alt="카카오 로그인 이미지"
                className={'ml-20'}
                src={KAKAO}
                width={24}
                height={24}
              />
              <span>카카오 계정으로 로그인</span>
            </button>
          </section>

          <section className="login__items--wrapper mt-12">
            <button type="button" className="google__button">
              <img
                alt="구글 로그인 이미지"
                src={GOOGLE}
                className={'ml-20'}
                width={24}
                height={24}
              />
              <span>구글 계정으로 로그인</span>
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
        <section className="division ml-23 mr-28">|</section>
        <section className="join">
          <button type={'button'} className="route-text">
            회원가입 하기
          </button>
        </section>
      </article>
    </article>
  )
}
