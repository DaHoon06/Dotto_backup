import React, { useState } from 'react'
import { Regex } from '@/constants/regex'
import { ins as axios } from '@/lib/axios'
import { IRegister } from '@/interfaces/register'
import { MESSAGE } from '@/constants/message'
import { useMutation } from 'react-query'

export default function useRegister(props: IRegister.PROPS) {
  const { onChange, onClickTab, validation } = props
  const [formType, setFormType] = useState<boolean>(true)
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

  const customStyle = {
    button: {
      width: '120px',
    } as React.CSSProperties,
    redirectButton: {
      width: '104px',
    } as React.CSSProperties,
  }

  const { id, password, password2, nickname, phone } = inputValue

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
    if (password !== password2) sentence = MESSAGE.NOT_CORRECT_PASSWORD
    else sentence = MESSAGE.BLANK

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
  const joinApi = async (userInfo: IRegister.Data) => {
    const { data } = await axios.post('/users/sign-up', userInfo)
    const { result } = data
    return result
  }

  const { mutate } = useMutation(joinApi, {
    onSuccess: (data: any) => {
      // TODO : 회원가입 성공 시 모달 창 전환
      return data
    },
    onError: (e) => {
      console.log(e)
    },
  })
  const join = async (userInfo: IRegister.Data) => {
    try {
      return mutate(userInfo)
    } catch (e) {
      console.log(e)
    }
  }

  const onlyNumberPhoneCheck = (str: string) => {
    let phoneNumber = ''
    if (str) phoneNumber = str.replace(Regex.ONLY_NUMBER, '')
    else phoneNumber = ''

    setInputValue({
      ...inputValue,
      phone: phoneNumber,
    })
  }

  const formValidation = (): void => {
    const idCheck = Regex.ID.test(id)
    const nicknameCheck = Regex.NICKNAME.test(nickname)
    const phoneCheck = Regex.PHONE.test(phone)
    const firstPassword = Regex.PASSWORD.test(password)
    const secondPassword = Regex.PASSWORD.test(password2)
    onlyNumberPhoneCheck(phone)

    if (!firstPassword && password.length > 0)
      systemMessage({ passwordMessage1: MESSAGE.PASSWORD_NOT_PATTERN })
    else if (firstPassword) systemMessage({ passwordMessage1: MESSAGE.BLANK })

    if (!secondPassword && password2.length > 0)
      systemMessage({ passwordMessage2: MESSAGE.PASSWORD_NOT_PATTERN })
    else if (secondPassword) systemMessage({ passwordMessage2: MESSAGE.BLANK })

    // if (password !== password2)
    //   systemMessage({ passwordMessage1: MESSAGE.NOT_CORRECT_PASSWORD })
    // else if (password === password2)
    //   systemMessage({ passwordMessage1: MESSAGE.BLANK })

    if (validation)
      validation({
        common:
          idCheck &&
          phoneCheck &&
          nicknameCheck &&
          firstPassword === secondPassword,
      })

    setValidateCheck({
      ...validateCheck,
      idCheck: idCheck && id.length > 0,
      passwordCheck: firstPassword && secondPassword,
      nicknameCheck: nicknameCheck && nickname.length > 0,
      phoneCheck: phoneCheck && phone.length > 0,
      next:
        idCheck &&
        phoneCheck &&
        nicknameCheck &&
        firstPassword === secondPassword,
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
      if (!result) sentence = MESSAGE.DUPLICATE_ID
      else sentence = MESSAGE.BLANK

      const sendMessage = { idMessage: sentence }
      systemMessage(sendMessage)
    } catch (e) {
      console.log(e)
    }
  }

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
      if (!result) sentence = MESSAGE.DUPLICATE_NICKNAME
      else sentence = MESSAGE.BLANK
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
    customStyle,
  }
}
