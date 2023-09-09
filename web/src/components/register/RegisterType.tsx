import {
  TATTOOIST,
  TATTOOIST_ACTIVE,
  USER,
  USER_ACTIVE,
} from '@/assets/icons/register'
import cn from 'classnames'
import Image from '@/components/common/image/Image'
import React, { useState } from 'react'
import Typography from '@/components/common/typography/Typography'
import { IRegister } from '@/interfaces/register'
import { Button } from '@/components/register/button/Button'
import style from '@/assets/styles/common/button.module.scss'

export const RegisterType = (props: IRegister.PROPS) => {
  const { changeComponent, setUserType } = props
  const [formType, setFormType] = useState(true)

  const onClickUserType = (payload: boolean) => {
    setFormType(payload)
  }

  const onClickHandler = (type: string) => {
    if (setUserType) setUserType(formType)
    changeComponent(type)
  }

  return (
    <section className={'register-type--container'}>
      <section className={'register-items-top'}>
        <section className={'flex'}>
          <button
            onClick={() => onClickUserType(true)}
            type={'button'}
            name={'user'}
            className={cn(
              formType
                ? 'register__button--tab-active'
                : 'register__button--tab',
              'mr-16'
            )}
          >
            {formType ? (
              <Image
                src={USER_ACTIVE}
                width={72}
                height={72}
                alt={'일반회원'}
              />
            ) : (
              <Image src={USER} width={72} height={72} alt={'일반회원'} />
            )}

            <Typography as={'span'} variant={'body2'} fontWeight={'medium'}>
              일반회원
            </Typography>
          </button>
          <button
            onClick={() => onClickUserType(false)}
            type={'button'}
            name={'tattoist'}
            className={
              formType
                ? 'register__button--tab'
                : 'register__button--tab-active'
            }
          >
            {formType ? (
              <Image
                src={TATTOOIST}
                width={72}
                height={72}
                alt={'타투이스트'}
              />
            ) : (
              <Image
                src={TATTOOIST_ACTIVE}
                width={72}
                height={72}
                alt={'타투이스트'}
              />
            )}
            <Typography as={'span'} variant={'body2'} fontWeight={'medium'}>
              타투이스트
            </Typography>
          </button>
        </section>
        <section className={'pt-64'}>
          <Typography
            variant={'body1'}
            fontWeight={'medium'}
            fontColor={'gray1'}
          >
            어떤 목적으로 닷투를 이용하실 건가요?
          </Typography>
          <Typography
            variant={'body2'}
            fontWeight={'regular'}
            fontColor={'gray3'}
            className={'pt-8'}
          >
            목적에 따른 다른 서비스가 제공됩니다.
          </Typography>
        </section>
      </section>

      <section className={cn('register__button--container')}>
        <Button
          onClickEvent={() => onClickHandler('policy')}
          className={cn(style.secondary__button, 'button mr-16')}
          label={'이전'}
        />
        <Button
          onClickEvent={() => onClickHandler('register')}
          className={cn(style.primary__button, 'button')}
          label={'다음'}
        />
      </section>
    </section>
  )
}
