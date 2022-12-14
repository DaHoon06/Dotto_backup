import React, { useState } from 'react'
import { Regex } from '@/constants/regex'
import { ins as axios } from '@/lib/axios'
import { IRegister, RegisterOptions } from '@/interfaces/register'

export default function useRegister(props: IRegister.PROPS) {
  const { onChange, onClickTab } = props
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

  const { id, password, password2, nickname, phone, gender } = inputValue

  const registerState = {
    getState: {
      formType,
      inputValue,
      validateCheck,
      message,
    },
    setState: {
      setFormType,
      setInputValue,
      setValidateCheck,
      setMessage,
    },
  }

  const initData = (type: boolean) => {
    if (type) {
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
    } else {
      setInputValue({
        ...inputValue,
        userType: '2',
        id: '',
        password: '',
        password2: '',
        nickname: '',
        phone: '',
        gender: 'male',
        contactType: '',
        email: '',
        address: '',
        addressDetail: '',
        workspaceImg: '',
      })
    }

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

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
    if (onChange) onChange(inputValue)
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
  const join = async (data: IRegister.Data) => {
    try {
      console.log(data)
      // const { data } = await axios.post('/users/sign-up', inputValue)
      // const { result } = data
    } catch (e) {
      console.log(e)
    }
  }

  const formValidation = (): void => {
    correctPassword() // 비밀번호가 일치하는지 확인

    const idCheck = Regex.ID.test(id)
    const nicknameCheck = Regex.NICKNAME.test(nickname)
    const phoneCheck = Regex.PHONE.test(phone)
    const passwordCheck = Regex.PASSWORD.test(password)
    const passwordCheck2 = Regex.PASSWORD.test(password2)

    if (!passwordCheck && password.length !== 0)
      systemMessage({
        passwordMessage1: '형식에 맞춰서 비밀번호를 다시 입력해주세요.',
      })
    else systemMessage({ passwordMessage1: '' })

    if (!passwordCheck2 && password2.length !== 0)
      systemMessage({
        passwordMessage2: '형식에 맞춰서 비밀번호를 다시 입력해주세요.',
      })
    else systemMessage({ passwordMessage2: '' })

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

  const duplicateIdCheck = async () => {
    try {
      const sendData = {
        id,
      }
      const { data } = await axios.get('/users/id-check', {
        params: sendData,
      })
      const { result } = data
      let sentence = ''
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
    initData(type)
    setFormType(type)
    if (onClickTab) onClickTab(type)
  }

  const registerEvent = {
    onClickUserType,
    onChangeHandler,
    formValidation,
    duplicateIdCheck,
    duplicateNicknameCheck,
    join,
  }

  return {
    registerState,
    registerEvent,
  }
}
