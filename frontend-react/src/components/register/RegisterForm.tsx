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
  const { changeComponent } = props
  const [formType, setFormType] = useState(true)
  const [commonValidation, setCommonValidation] = useState(true)
  const [additionalValidation, setAdditionalValidation] = useState(true)
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

  //TODO BACK 연동 후 이동 테스트
  const onClickHandlerNext = async () => {
    const data = await join(inputValue)
    const { result } = data
    if (result) changeComponent('completed')
  }

  const onClickHandlerPrev = () => {
    changeView('policy')
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

  const onClickTab = (payload: boolean): void => {
    setFormType(payload)
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
    if (common) setCommonValidation(!common)
    if (additional) setAdditionalValidation(!additional)
  }

  return (
    <article className={'form-container scroll scroll-type'}>
      <CommonForm
        validation={validation}
        onClickTab={onClickTab}
        onChange={onChangeHandler}
        changeComponent={changeView}
      />

      <hr className={'hr'} />

      {formType ? (
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
          disabled={commonValidation && additionalValidation}
          onClickEvent={onClickHandlerNext}
        />
      </section>
    </article>
  )
}
