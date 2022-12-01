import React, { useState } from 'react'

export const UserForm = (props: any) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    contactType: 'phone',
    email: '',
  })
  const { contactType, email } = additionalInfo

  const additionalData = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
    return props.additionalData(additionalInfo)
  }

  return (
    <section className={'p-40'}>
      <p className={'text text-regular-16px'}>
        타투이스트와 연락할 수단을 선택해 주세요.
      </p>
      <div className={'mt-40'}>
        <input
          checked={contactType === 'phone'}
          id={'phone'}
          name={'contactType'}
          onChange={additionalData}
          value={'phone'}
          type={'radio'}
          className={'mr-8'}
        />
        <label
          htmlFor={'phone'}
          className={'text-label text-regular-16px mr-40'}
        >
          전화번호
        </label>
        <input
          id={'email'}
          name={'contactType'}
          onChange={additionalData}
          value={'email'}
          type={'radio'}
          className={'mr-8'}
        />
        <label htmlFor={'email'} className={'text-label text-regular-16px'}>
          이메일
        </label>
      </div>
      {additionalInfo.contactType === 'email' && (
        <input
          name={'email'}
          onChange={additionalData}
          value={email}
          placeholder={'이메일을 입력해 주세요.'}
          type={'text'}
          className={'register-input w-100 text-label text-regular-16px'}
        />
      )}
    </section>
  )
}
