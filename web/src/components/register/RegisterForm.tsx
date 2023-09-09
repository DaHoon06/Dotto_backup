import React, { useEffect, useState } from 'react'
import { UserForm } from '@/components/register/form/UserForm'
import { TattoistForm } from '@/components/register/form/TattoistForm'
import { Button } from '@/components/register/button/Button'
import { IRegister, RegisterOptions } from '@/interfaces/register'
import style from '@/assets/styles/common/button.module.scss'
import cn from 'classnames'
import useRegister from '@/lib/hooks/useRegister'
import { CommonForm } from '@/components/register/form/CommonForm'

export const RegisterForm = (props: IRegister.PROPS) => {
  const { changeComponent, userType } = props
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
    workspaceImg: [],
  })
  const { registerEvent, customStyle } = useRegister(props)
  const { join } = registerEvent

  useEffect(() => {
    const initData = {
      common: false,
      additional: false,
    }
    return () => validation(initData)
  }, [inputValue])

  const onClickHandlerNext = async () => {
    const data = await join(inputValue)
    const { result } = data

    if (result) changeComponent('completed')
    changeComponent('completed')
  }

  const onClickHandlerPrev = () => {
    changeView('registerType')
  }

  const changeView = (type: string) => {
    return changeComponent(type)
  }

  const onChangeHandler = (data: IRegister.Data): void => {
    setInputValue({
      ...inputValue,
      ...data,
    })
  }

  const userAdditionalInformation = (data: RegisterOptions): void => {
    setInputValue({
      ...inputValue,
      ...data,
    })
  }

  const validation = (data: {
    common?: boolean
    additional?: boolean
  }): void => {
    const { common, additional } = data
    console.log(common, additional, '추가 데이터')
  }

  return (
    <section className={'form-container'}>
      <section className={'register__form scroll'}>
        <CommonForm
          validation={validation}
          onChange={onChangeHandler}
          changeComponent={changeView}
        />
        {userType ? (
          <UserForm
            validation={validation}
            userAdditionalInformation={userAdditionalInformation}
          />
        ) : (
          <TattoistForm
            validation={validation}
            userAdditionalInformation={userAdditionalInformation}
          />
        )}
      </section>
      <section className={cn('register__button--container')}>
        <Button
          className={cn(style.secondary__button, 'mr-16 button')}
          buttonStyle={customStyle.redirectButton}
          label={'이전'}
          onClickEvent={onClickHandlerPrev}
        />
        <Button
          className={cn(style.primary__button, 'button')}
          buttonStyle={customStyle.redirectButton}
          label={'다음'}
          // disabled={commonValidation && additionalValidation}
          onClickEvent={onClickHandlerNext}
        />
      </section>
    </section>
  )
}
