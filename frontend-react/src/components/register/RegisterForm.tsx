import { useState } from 'react'
import {
  TATTOOIST,
  TATTOOIST_ACTIVE,
  USER,
  USER_ACTIVE,
} from '@/assets/icons/register'
import { UserForm } from '@/components/register/form/UserForm'
import { TattoistForm } from '@/components/register/form/TattoistForm'
import { ins as axios } from '@/lib/axios'

export const RegisterForm = (props: any) => {
  const [formType, setFormType] = useState(true)
  const [inputValue, setInputValue] = useState({
    userType: '1',
    id: '',
    password: '',
    password2: '',
    nickname: '',
    phone: '',
    gender: 'male',
    contactType: 'phone',
    email: '',
    address: '',
    addressDetail: '',
    workspaceImg: '',
  })

  const [validateCheck, setValidateCheck] = useState({
    idCheck: false,
    passwordCheck: false,
    nicknameCheck: false,
    phoneCheck: false,
    emailCheck: false,
    next: false,
  })

  const [message, setMessage] = useState({
    idMessage: '',
    passwordMessage1: '',
    passwordMessage2: '',
    nicknameMessage: '',
    phoneMessage: '',
  })
  const {
    idMessage,
    passwordMessage1,
    passwordMessage2,
    nicknameMessage,
    phoneMessage,
  } = message
  const { id, password, password2, nickname, phone, gender } = inputValue
  const {
    idCheck,
    passwordCheck,
    nicknameCheck,
    phoneCheck,
    emailCheck,
    next,
  } = validateCheck

  const initData = () => {
    setInputValue({
      ...inputValue,
      userType: '1',
      id: '',
      password: '',
      password2: '',
      nickname: '',
      phone: '',
      gender: 'male',
      contactType: 'phone',
      email: '',
      address: '',
      addressDetail: '',
      workspaceImg: '',
    })

    setValidateCheck({
      ...validateCheck,
      idCheck: false,
      passwordCheck: false,
      nicknameCheck: false,
      phoneCheck: false,
      emailCheck: false,
      next: false,
    })
  }
  // change key event
  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  const changeView = (type: string) => {
    return props.modalType(type)
  }

  const onClickHandlerNext = async () => {
    formValidation()
    if (next) await join()
  }

  const onClickHandlerPrev = () => {
    changeView('policy')
  }
  // 일반 유저 추가 정보
  const additionalDataUser = (userData: any) => {
    const { contactType: type, email: mail } = userData
    const contactType = type || ''
    const email = mail || ''
    setInputValue({
      ...inputValue,
      contactType,
      email,
    })
  }
  // 타투이스트 추가 정보
  const additionalDataTattoist = (userData: any) => {
    const {
      address: addressData,
      addressDetail: detailData,
      workspaceImg: wkImg,
    } = userData
    const address = addressData || ''
    const addressDetail = detailData || ''
    const workspaceImg = wkImg || ''
    setInputValue({
      ...inputValue,
      address,
      addressDetail,
      workspaceImg,
    })
  }

  const regularExpression = () => {
    const idReg = /^[a-z0-9_]{5,20}$/
    const passwordReg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const nicknameReg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/
    const phoneReg = /^01([016789])-?([0-9]{4})-?([0-9]{4})$/
    const emailReg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    return {
      idReg,
      passwordReg,
      nicknameReg,
      phoneReg,
      emailReg,
    }
  }

  const formValidation = (): void => {
    const { idReg, passwordReg, nicknameReg, phoneReg, emailReg } =
      regularExpression()

    correctPassword() // 비밀번호가 일치하는지 확인

    const idCheck = idReg.test(id)
    const nicknameCheck = nicknameReg.test(nickname)
    const phoneCheck = phoneReg.test(phone)
    const passwordCheck = passwordReg.test(password)
    const passwordCheck2 = passwordReg.test(password2)

    if (!passwordCheck || !passwordCheck2)
      systemMessage({
        passwordMessage1: '형식에 맞춰서 비밀번호를 다시 입력해주세요.',
      })
    else systemMessage({ passwordMessage1: '' })

    setValidateCheck({
      ...validateCheck,
      idCheck,
      nicknameCheck,
      phoneCheck,
      next:
        idCheck &&
        passwordCheck &&
        passwordCheck2 &&
        nicknameCheck &&
        phoneCheck,
    })
  }
  // 아이디 중복 확인
  const duplicateIdCheck = async () => {
    try {
      const sendData = {
        id,
      }
      const { data } = await axios.get('/users/id-check', { params: sendData })
      const { result } = data
      let sentence = ''
      // true 사용가능
      if (!result) sentence = '중복된 아이디 입니다.'
      else sentence = ''

      const sendMessage = { idMessage: sentence }
      systemMessage(sendMessage)
    } catch (e) {
      console.log(e)
    }
  }
  // 닉네임 중복 확인
  const duplicateNicknameCheck = async () => {
    try {
      const sendData = {
        nickname,
      }
      const { data } = await axios.get('/users/nickname-check', {
        params: sendData,
      })
      const { result } = data
      let sentence = ''
      if (!result) sentence = '중복된 닉네임 입니다.'
      else sentence = ''
      const sendMessage = { nicknameMessage: sentence }
      systemMessage(sendMessage)
    } catch (e) {
      console.log(e)
    }
  }
  // 비밀번호 일치하는지 확인
  const correctPassword = () => {
    let sentence = ''

    if (password !== password2) sentence = '비밀번호가 일치하지 않습니다.'
    else sentence = ''

    const sendMessage = { passwordMessage2: sentence }
    systemMessage(sendMessage)
  }

  // 양식에 안맞을 경우 경고 메세지
  const systemMessage = (sendMessage: any) => {
    return setMessage({
      ...message,
      ...sendMessage,
    })
  }
  // 회원가입
  const join = async () => {
    try {
      const { data } = await axios.post('/users/sign-up', inputValue)
      const { result } = data

      if (result) {
        changeView('success')
      }
    } catch (e) {
      console.log(e)
    }
  }
  // 탭 전환
  // 일반 회원 <-> 타투이스트
  const onClickUserType = (type: boolean) => {
    type
      ? setInputValue({
          ...inputValue,
          userType: '1',
        })
      : setInputValue({
          ...inputValue,
          userType: '2',
        })
    initData()
    setFormType(type)
  }

  return (
    <article>
      <form className={'register-form-container'}>
        <section className={'register-items-top'}>
          <label className={'text text-regular-16px'}>이용목적</label>
          <div className={'flex-layout'}>
            <button
              onClick={() => onClickUserType(true)}
              type={'button'}
              name={'user'}
              className={
                formType
                  ? 'register-type-button-active  mr-16'
                  : 'register-type-button  mr-16'
              }
            >
              {formType ? (
                <img
                  src={USER_ACTIVE}
                  width={72}
                  height={72}
                  alt={'일반회원'}
                />
              ) : (
                <img src={USER} width={80} height={80} alt={'일반회원'} />
              )}

              <span>일반</span>
            </button>
            <button
              onClick={() => onClickUserType(false)}
              type={'button'}
              name={'tattoist'}
              className={
                formType
                  ? 'register-type-button'
                  : 'register-type-button-active'
              }
            >
              {formType ? (
                <img
                  src={TATTOOIST}
                  width={72}
                  height={72}
                  alt={'타투이스트'}
                />
              ) : (
                <img
                  src={TATTOOIST_ACTIVE}
                  width={72}
                  height={72}
                  alt={'타투이스트'}
                />
              )}
              <span>타투이스트</span>
            </button>
          </div>
        </section>
        {/*이 아래 부분 탭으로 컴포넌트로 관리*/}
        <section className={'register-items'}>
          <label className={'text text-regular-16px'}>아이디</label>
          <div className={'flex-justify-between'}>
            <input
              name={'id'}
              placeholder={'6자리이상의 영문 혹은 영문과 숫자 조합'}
              className={'register-input text-label text-regular-16px'}
              type={'text'}
              onChange={onChangeHandler}
              onKeyUp={formValidation}
              value={id}
              tabIndex={10}
            />
            <button
              disabled={!idCheck}
              onClick={duplicateIdCheck}
              type={'button'}
              className={idCheck ? 'button' : 'disabled-button'}
            >
              중복확인
            </button>
          </div>
        </section>

        <section className={'register-items'}>
          <div />
          <span>{idMessage}</span>
        </section>

        <section className={'register-items'}>
          <label className={'text text-regular-16px'}>비밀번호</label>
          <div className={'flex-justify-between'}>
            <input
              name={'password'}
              autoComplete="false"
              placeholder={'비밀번호를 입력해주세요.'}
              className={'register-input text-label text-regular-16px'}
              type={'password'}
              onChange={onChangeHandler}
              onKeyUp={formValidation}
              value={password}
              tabIndex={10}
            />
          </div>
        </section>
        <section className={'register-items'}>
          <div />
          <span>{passwordMessage1}</span>
        </section>
        <section className={'register-items'}>
          <label className={'text text-regular-16px'}>비밀번호 확인</label>
          <div className={'flex-justify-between'}>
            <input
              name={'password2'}
              autoComplete="false"
              placeholder={'비밀번호를 한번 더 입력해주세요.'}
              className={'register-input text-label text-regular-16px'}
              type={'password'}
              value={password2}
              onChange={onChangeHandler}
              onKeyUp={formValidation}
              tabIndex={10}
            />
          </div>
        </section>
        <section className={'register-items'}>
          <div />
          <span>{passwordMessage2}</span>
        </section>
        <section className={'register-items'}>
          <label className={'text text-regular-16px'}>닉네임</label>
          <div className={'flex-justify-between'}>
            <input
              name={'nickname'}
              placeholder={'닉네임을 입력해주세요.'}
              className={'register-input text-label text-regular-16px'}
              type={'text'}
              onChange={onChangeHandler}
              onKeyUp={formValidation}
              value={nickname}
              tabIndex={10}
            />
            <button
              disabled={!nicknameCheck}
              onClick={duplicateNicknameCheck}
              className={nicknameCheck ? 'button' : 'disabled-button'}
            >
              중복확인
            </button>
          </div>
        </section>
        <section className={'register-items'}>
          <div />
          <span>{nicknameMessage}</span>
        </section>
        <section className={'register-items'}>
          <label className={'text text-regular-16px'}>휴대폰</label>
          <div className={'flex-justify-between'}>
            <input
              name={'phone'}
              placeholder={'숫자만 입력해주세요.'}
              className={'register-input text-label text-regular-16px'}
              type={'tel'}
              onChange={onChangeHandler}
              onKeyUp={formValidation}
              value={phone}
              tabIndex={10}
            />
            <button
              disabled={!phoneCheck}
              type={'button'}
              className={phoneCheck ? 'button' : 'disabled-button'}
            >
              인증번호 받기
            </button>
          </div>
        </section>
        <section className={'register-items'}>
          <div />
          <span>{phoneMessage}</span>
        </section>
        <section className={'register-items'}>
          <label className={'text text-regular-16px'}>성별</label>
          <div>
            <input
              checked={gender === 'male'}
              name={'gender'}
              type={'radio'}
              className={'mr-8'}
              onChange={onChangeHandler}
              tabIndex={10}
              value={'male'}
              id={'male'}
            />
            <label
              htmlFor={'male'}
              className={'text-label text-regular-16px mr-40'}
            >
              남자
            </label>
            <input
              name={'gender'}
              type={'radio'}
              className={'mr-8'}
              onChange={onChangeHandler}
              tabIndex={10}
              value={'female'}
              id={'female'}
            />
            <label
              htmlFor={'female'}
              className={'text-label text-regular-16px'}
            >
              여자
            </label>
          </div>
        </section>
      </form>

      <hr className={'hr'} />

      {formType ? (
        <UserForm additionalData={additionalDataUser} />
      ) : (
        <TattoistForm additionalData={additionalDataTattoist} />
      )}

      <section className={'policy-button-container'}>
        <button
          onClick={onClickHandlerPrev}
          className={'cancel-button mr-16'}
          type={'button'}
        >
          이전
        </button>
        <button
          disabled={!validateCheck.next}
          onClick={onClickHandlerNext}
          className={!validateCheck.next ? 'disabled-button' : 'button'}
          type={'button'}
        >
          다음
        </button>
      </section>
    </article>
  )
}