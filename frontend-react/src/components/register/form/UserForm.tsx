import React, { useEffect, useState } from 'react'
import Typography from '@/components/common/typography/Typography'
import { IRegister } from '@/interfaces/register'
import { Regex } from '@/constants/regex'

export const UserForm = (props: IRegister.OPTIONS) => {
  const { additionalData, validation } = props
  const [additionalInfo, setAdditionalInfo] = useState({
    contactType: 'phone',
    email: '',
  })
  const { contactType, email } = additionalInfo
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    emailCheck()
  }, [additionalInfo])

  const sendData = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
    additionalData(additionalInfo)
  }

  const emailCheck = () => {
    const emailTest = Regex.EMAIL.test(email)
    if (!emailTest) {
      setMessage('이메일 형식을 확인해주세요.')
    } else {
      validation({ additional: emailTest })
      setMessage('')
    }
  }

  return (
    <section className={'register-options'}>
      <Typography className={'flex'}>
        타투이스트와 연락할 수단을 선택해 주세요.
      </Typography>
      <section className={'mt-20 flex'}>
        <div className={'flex items-center'}>
          <input
            checked={contactType === 'phone'}
            id={'phone'}
            name={'contactType'}
            onChange={sendData}
            value={'phone'}
            type={'radio'}
            className={'mr-8'}
          />
          <label htmlFor={'phone'} className={'pointer'}>
            전화번호
          </label>
        </div>
        <div className={'flex items-center'}>
          <input
            id={'email'}
            name={'contactType'}
            onChange={sendData}
            value={'email'}
            type={'radio'}
            className={'mr-8 '}
          />
          <label htmlFor={'email'} className={'pointer'}>
            이메일
          </label>
        </div>
      </section>
      {additionalInfo.contactType === 'email' && (
        <>
          <input
            name={'email'}
            onChange={sendData}
            onKeyUp={emailCheck}
            value={email}
            placeholder={'이메일을 입력해 주세요.'}
            type={'text'}
            className={'register__input mt-20 input--email'}
          />
          <section className={'error-user'}>
            <Typography variant={'caption'} fontColor={'red'}>
              {message}
            </Typography>
          </section>
        </>
      )}
    </section>
  )
}
