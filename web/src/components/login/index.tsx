import './index.scss'
import style from '@/assets/styles/common/button.module.scss'
import { LINE } from '@/assets/icons/social'
import React, { useEffect, useState } from 'react'
import { ins as axios } from '@/lib/axios'
import { useCookies } from 'react-cookie'
import { LOGIN } from '@/interfaces/login'
import { useAuthContext } from '@/stores/AuthProvieder'
import { useMutation } from 'react-query'
import { ERROR_MESSAGE } from '@/interfaces/common/EMessageType'
import { KakaoLogin } from '@/components/utils/kakao-api/KakaoLogin'
import { GoogleLoginButton } from '@/components/utils/google-api/GoogleLogin'
import { Logo } from '@/components/common/icons/Logo'
import Typography from '@/components/common/typography/Typography'
import BACK from '@/assets/icons/common/chevron.svg'
import Image from '@/components/common/image/Image'

interface ILogin {
  id: string
  password: string
}

export const Login = (props: LOGIN.PROP) => {
  const [loginInfo, setLoginInfo] = useState<ILogin>({
    id: '',
    password: '',
  })
  const [loginErrorMsg, setLoginErrorMsg] = useState('')
  const [saveId, setSaveId] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['id'])
  const { setUserInfo, setLoggedIn } = useAuthContext()

  const { id, password } = loginInfo
  const { closeModal, changeComponent } = props
  const sessionStorage = window.sessionStorage

  useEffect(() => {
    setLoginErrorMsg('')
  }, [loginInfo])

  useEffect(() => {
    getCookie()
  }, [])

  const getCookie = () => {
    const getId = cookies['id']
    if (getId !== undefined) {
      loginInfo.id = getId
      setSaveId(true)
    }
  }

  const onChangeHandler = async (e: { target: HTMLInputElement }) => {
    removeCookie('id')
    setSaveId(false)
    const { name, value } = e.target
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    })
  }

  const loginApi = async () => {
    try {
      const { data: loginResponse } = await axios.post('/sign-in', loginInfo)
      const { result } = loginResponse
      const { data } = result
      return data
    } catch (e) {
      console.log(e)
    }
  }

  const { mutate } = useMutation(loginApi, {
    onSuccess: (data: LOGIN.STATE) => {
      setSessionToUserData(data)
      setUserInfo(data)
      setLoggedIn()
      setLoginErrorMsg(ERROR_MESSAGE.BLANK)
      close(false) // modal Close
    },
    onError: () => {
      setLoginErrorMsg(ERROR_MESSAGE.LOGIN_FAIL)
    },
  })

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    mutate()
  }

  const setSessionToUserData = (payload: LOGIN.STATE) => {
    const { accessToken, refreshToken, nickname, roles } = payload
    sessionStorage.setItem('accessToken', accessToken)
    sessionStorage.setItem('refreshToken', refreshToken)
    sessionStorage.setItem('nickname', nickname)
    sessionStorage.setItem('roles', roles)
  }

  const checkBoxHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSaveId(!saveId)
    checkedItemHandler(target.checked)
  }

  const checkedItemHandler = (checked: boolean) => {
    if (checked) setCookie('id', id)
    else removeCookie('id')
  }

  const close = (payload: boolean) => {
    closeModal(payload)
  }

  const modalType = (type: string) => {
    resetLoginData()
    changeComponent(type)
  }

  const resetLoginData = () => {
    setLoginInfo({
      ...loginInfo,
    })
  }

  const socialLoginSuccess = async (payload: boolean) => {
    try {
      console.log('롸', payload)
    } catch (e) {
      console.log()
    }
  }

  return (
    <>
      <section className={'close__button--wrapper'}>
        <button
          type={'button'}
          className={'close__button'}
          onClick={() => close(true)}
        >
          <Image alt={'close'} src={BACK} />
        </button>
      </section>
      <article className="login">
        <section className="logo--wrapper login--group pt-26">
          <Logo className={'logo'} />
        </section>

        <section className="login--group">
          <form>
            <div className="login__items--wrapper">
              <input
                className="login__input"
                type="text"
                autoComplete="username"
                placeholder="아이디"
                onChange={onChangeHandler}
                value={id}
                name={'id'}
              />
            </div>
            <div className="login__items--wrapper mt-16">
              <input
                className="login__input"
                type="password"
                autoComplete="new-password"
                placeholder="비밀번호"
                name={'password'}
                onChange={onChangeHandler}
                value={password}
              />
            </div>
            <p className="warning-message">{loginErrorMsg}</p>
            <div className="check-box--wrapper mb-10">
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
            </div>
            <div className="login__items-wrapper mt-24">
              <button
                className={style.black__button}
                type="submit"
                onClick={login}
              >
                <Typography variant={'body2'} fontColor={'white'}>
                  로그인
                </Typography>
              </button>
            </div>
          </form>
        </section>

        <section className="login--group mt-32">
          <img className="social-login--line" src={LINE} alt="간편로그인 /" />

          <article className="social-login__button--group pt-24">
            <KakaoLogin loginSuccess={socialLoginSuccess} />
            <GoogleLoginButton />
          </article>
        </section>

        <section className="login-route--group pt-20">
          <div className="find-password">
            <a className="route-text" href="/">
              비밀번호 찾기
            </a>
          </div>
          <span className="division ml-23 mr-28">|</span>
          <div className="join">
            <button
              type={'button'}
              className="route-text"
              onClick={() => modalType('register')}
            >
              회원가입 하기
            </button>
          </div>
        </section>
      </article>
    </>
  )
}
