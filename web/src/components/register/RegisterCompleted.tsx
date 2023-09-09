import { Button } from '@/components/register/button/Button'
import React from 'react'
import { IRegister } from '@/interfaces/register'
import { WELCOME } from '@/assets/icons/register'
import Typography from '@/components/common/typography/Typography'
import style from '@/assets/styles/common/button.module.scss'
import cn from 'classnames'

export const RegisterCompleted = (props: IRegister.PROPS) => {
  const { changeComponent } = props
  const onClickHandler = (type: string) => {
    changeComponent(type)
  }

  return (
    <article className={'completed'}>
      <section className={'completed-container'}>
        <div>
          <img src={WELCOME} alt={'회원가입완료'} width={80} height={80} />
          <Typography variant={'body1'} fontColor={'gray1'}>
            회원가입이 완료되었습니다!
          </Typography>
        </div>
      </section>
      <section className={'button-group'}>
        <Button
          onClickEvent={() => onClickHandler('close')}
          className={cn(style.secondary__button, 'button mr-16')}
          label={'메인으로'}
        />
        <Button
          onClickEvent={() => onClickHandler('login')}
          className={cn(style.black__button, 'button')}
          label={'로그인'}
        />
      </section>
    </article>
  )
}
