import React, { useEffect, useState } from 'react'
import { Regex } from '@/constants/regex'
import { ins as axios } from '@/lib/axios'
import { IRegister } from '@/interfaces/register'
import { MESSAGE } from '@/constants/message'
import { useMutation } from 'react-query'

type TMessage = {
  [key: string]: string
}

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
    contactType: 1,
    contactValue: '',
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

  const [messageCondition, setMessageCondition] = useState({
    id: false,
    nickname: false,
  })

  const customStyle = {
    button: {
      width: 'min(20vw, 120px)',
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
      messageCondition,
    },
    setState: {
      setFormType,
      setInputValue,
      setValidateCheck,
      setMessage,
    },
  }

  const initData = (type: boolean): void => {
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
        contactType: 1,
        contactValue: '',
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
        contactType: 0,
        contactValue: '',
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

  useEffect(() => {
    if (onChange) onChange(inputValue)
  }, [inputValue])

  const onChangeHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  // 비밀번호 일치하는지 확인
  const correctPassword = (): void => {
    let sentence = ''
    if (password !== password2) sentence = MESSAGE.NOT_CORRECT_PASSWORD
    else sentence = MESSAGE.BLANK

    const sendMessage = { passwordMessage2: sentence }
    systemMessage(sendMessage)
  }

  // 양식에 안맞을 경우 경고 메세지
  const systemMessage = (sendMessage: TMessage): void => {
    setMessage({
      ...message,
      ...sendMessage,
    })
  }
  // TODO: 일반 사용자랑 닷투이스트랑 분
  const joinApi = async (userInfo: IRegister.Data): Promise<any> => {
    const user = userInfo.userType === '1'

    if (user) {
      const sendData = {
        contactId: userInfo.contactValue,
        contactType: userInfo.contactType,
        gender: userInfo.gender,
        id: userInfo.id,
        loginType: 'user',
        nickname: userInfo.nickname,
        password: userInfo.password,
        phone: userInfo.phone,
      }
      return await axios.post('/sign-up', sendData)
    } else {
      const sendData = {
        address: userInfo.address,
        addressDetail: userInfo.addressDetail,
        gender: userInfo.gender,
        id: userInfo.id,
        loginType: 'user',
        nickname: userInfo.nickname,
        password: userInfo.password,
        phone: userInfo.phone,
      }
      return await axios.post('/sign-up', sendData)
    }
  }

  const { mutate } = useMutation(joinApi, {
    onSuccess: (data: Promise<boolean>) => {
      return data
    },
    onError: (e) => {
      console.log(e)
    },
  })

  const join = async (userInfo: IRegister.Data): Promise<any> => {
    try {
      return mutate(userInfo)
    } catch (e) {
      console.log(e)
    }
  }

  const onlyNumberPhoneCheck = (str: string): void => {
    let phoneNumber = ''
    if (str) phoneNumber = str.replace(Regex.ONLY_NUMBER, '')
    else phoneNumber = ''

    setInputValue({
      ...inputValue,
      phone: phoneNumber,
    })
  }

  const formValidation = (): void => {
    const idReg = Regex.ID.test(id)
    const nicknameReg = Regex.NICKNAME.test(nickname)
    const phoneReg = Regex.PHONE.test(phone)
    const firstPasswordReg = Regex.PASSWORD.test(password)
    const secondPasswordReg = Regex.PASSWORD.test(password2)
    onlyNumberPhoneCheck(phone)

    if (!firstPasswordReg && password.length > 0)
      systemMessage({ passwordMessage1: MESSAGE.PASSWORD_NOT_PATTERN })
    else if (firstPasswordReg)
      systemMessage({ passwordMessage1: MESSAGE.BLANK })

    if (!secondPasswordReg && password2.length > 0)
      systemMessage({ passwordMessage2: MESSAGE.PASSWORD_NOT_PATTERN })
    else if (secondPasswordReg)
      systemMessage({ passwordMessage2: MESSAGE.BLANK })

    if (firstPasswordReg && secondPasswordReg) correctPassword()
    if (validation)
      validation({
        common:
          idReg &&
          nicknameReg &&
          phoneReg &&
          firstPasswordReg === secondPasswordReg,
      })
    setValidateCheck({
      ...validateCheck,
      idCheck: idReg && id.length > 0,
      passwordCheck: firstPasswordReg && secondPasswordReg,
      nicknameCheck: nicknameReg && nickname.length > 0,
      phoneCheck: phoneReg && phone.length > 0,
      next:
        idReg &&
        nicknameReg &&
        phoneReg &&
        firstPasswordReg === secondPasswordReg &&
        password === password2,
    })
  }

  const duplicateIdCheck = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`/members/existsbyid/${id}`)
      const { result } = data
      let sentence = ''
      if (result.data) sentence = MESSAGE.DUPLICATE_ID
      else sentence = MESSAGE.AVAILABLE_ID
      const sendMessage = { idMessage: sentence }
      systemMessage(sendMessage)
      setMessageCondition({
        ...messageCondition,
        id: !result.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  const duplicateNicknameCheck = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`/members/existsbynickname/${nickname}`)
      const { result } = data
      let sentence = ''
      if (result.data) sentence = MESSAGE.DUPLICATE_NICKNAME
      else sentence = MESSAGE.AVAILABLE_NICKNAME
      const sendMessage = { nicknameMessage: sentence }
      systemMessage(sendMessage)
      setMessageCondition({
        ...messageCondition,
        nickname: !result.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  const onClickUserType = (type: boolean): void => {
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
