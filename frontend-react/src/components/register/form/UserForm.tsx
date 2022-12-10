import React, { useState } from 'react'
import Typography from '@/components/common/typography/Typography'
import { IRegister } from '@/interfaces/register'

export const UserForm = (props: IRegister.OPTIONS) => {
  const { additionalData } = props
  const [additionalInfo, setAdditionalInfo] = useState({
    contactType: 'phone',
    email: '',
  })
  const { contactType, email } = additionalInfo

  const sendData = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
    return additionalData(additionalInfo)
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
        <input
          name={'email'}
          onChange={sendData}
          value={email}
          placeholder={'이메일을 입력해 주세요.'}
          type={'text'}
          className={'register__input mt-20 input--email'}
        />
      )}
    </section>
  )
}
