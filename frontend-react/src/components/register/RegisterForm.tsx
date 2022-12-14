import React, { useState } from 'react'
import { UserForm } from '@/components/register/form/UserForm'
import { TattoistForm } from '@/components/register/form/TattoistForm'
import { Button } from '@/components/register/button/Button'
import { IRegister, RegisterOptions } from '@/interfaces/register'
import style from '@/assets/styles/common/button.module.scss'
import cn from 'classnames'
import useRegister from '@/lib/hooks/useRegister'
import { CommonForm } from '@/components/register/form/CommonForm'

export const RegisterForm = (props: IRegister.PROPS) => {
  const { changeComponent } = props
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

  const customStyle = {
    button: {
      width: '120px',
    } as React.CSSProperties,
    redirectButton: {
      width: '104px',
    } as React.CSSProperties,
  }

  const { registerEvent } = useRegister(props)
  const { join } = registerEvent

  const onClickHandlerNext = async () => {
    await join(inputValue)
  }

  const onClickHandlerPrev = () => {
    changeView('policy')
  }

  const changeView = (type: string) => {
    return changeComponent(type)
  }

  const onChangeHandler = (data: IRegister.Data) => {
    setInputValue({
      ...inputValue,
      ...data,
    })
  }

  const onClickTab = (payload: boolean) => {
    setFormType(payload)
  }

  const userAdditionalData = (data: RegisterOptions) => {
    setInputValue({
      ...inputValue,
      ...data,
    })
  }

  return (
    <article className={'form-container'}>
      <CommonForm
        onClickTab={onClickTab}
        onChange={onChangeHandler}
        changeComponent={changeView}
      />
      <hr className={'hr'} />

      {formType ? (
        <UserForm additionalData={userAdditionalData} />
      ) : (
        <TattoistForm additionalData={userAdditionalData} />
      )}

      <section className={cn('register__button--container pt-20 pb-20 pr-40')}>
        <Button
          className={cn(style.secondary__button, 'mr-16')}
          buttonStyle={customStyle.redirectButton}
          label={'이전'}
          onClickEvent={onClickHandlerPrev}
        />
        <Button
          className={style.primary__button}
          buttonStyle={customStyle.redirectButton}
          label={'다음'}
          disabled={false}
          onClickEvent={onClickHandlerNext}
        />
      </section>
    </article>
  )
}
