import cn from 'classnames'

import { Button } from '@/components/register/button/Button'
import style from '@/assets/styles/common/button.module.scss'
import Typography from '@/components/common/typography/Typography'
import React from 'react'
import useRegister from '@/lib/hooks/useRegister'
import { IRegister } from '@/interfaces/register'
import { PLACEHOLDERS } from '@/constants/placeholders'

export const CommonForm = (props: IRegister.PROPS) => {
  const { registerState, registerEvent, customStyle } = useRegister(props)
  const { inputValue, message, validateCheck, messageCondition } =
    registerState.getState
  const { id, password, password2, nickname, phone, gender } = inputValue
  const { idCheck, nicknameCheck, phoneCheck } = validateCheck
  const {
    idMessage,
    passwordMessage1,
    passwordMessage2,
    nicknameMessage,
    phoneMessage,
  } = message
  const { id: idCondition, nickname: nicknameCondition } = messageCondition

  const {
    onChangeHandler,
    formValidation,
    duplicateIdCheck,
    duplicateNicknameCheck,
  } = registerEvent

  return (
    <form className={'form'}>
      <section className={'register-items'}>
        <Typography variant={'body2'}>아이디</Typography>
        <div className={'flex-justify-between'}>
          <input
            name={'id'}
            placeholder={PLACEHOLDERS.id}
            className={'register__input'}
            type={'text'}
            onChange={onChangeHandler}
            onKeyUp={formValidation}
            value={id}
            tabIndex={10}
          />
          <Button
            label={'중복확인'}
            disabled={!idCheck}
            onClickEvent={duplicateIdCheck}
            className={style.primary__button}
            buttonStyle={customStyle.button}
          />
        </div>
      </section>

      <section className={'error'}>
        <Typography
          variant={'caption'}
          fontColor={idCondition ? 'blue' : 'red'}
        >
          {idMessage}
        </Typography>
      </section>

      <section className={'register-items pt-12'}>
        <Typography variant={'body2'}>비밀번호</Typography>
        <div className={'flex-justify-between'}>
          <input
            name={'password'}
            autoComplete="false"
            placeholder={PLACEHOLDERS.password1}
            className={'register__input'}
            type={'password'}
            onChange={onChangeHandler}
            onKeyUp={formValidation}
            value={password}
            tabIndex={10}
          />
        </div>
      </section>
      <section className={'error'}>
        <Typography variant={'caption'} fontColor={'red'}>
          {passwordMessage1}
        </Typography>
      </section>
      <section className={'register-items  pt-12'}>
        <Typography variant={'body2'}>비밀번호 확인</Typography>
        <div className={'flex-justify-between'}>
          <input
            name={'password2'}
            autoComplete="false"
            placeholder={PLACEHOLDERS.password2}
            className={'register__input'}
            type={'password'}
            value={password2}
            onChange={onChangeHandler}
            onKeyUp={formValidation}
            tabIndex={10}
          />
        </div>
      </section>
      <section className={'error'}>
        <Typography variant={'caption'} fontColor={'red'}>
          {passwordMessage2}
        </Typography>
      </section>
      <section className={'register-items  pt-12'}>
        <Typography variant={'body2'}>닉네임</Typography>
        <div className={'flex-justify-between'}>
          <input
            name={'nickname'}
            placeholder={PLACEHOLDERS.nickname}
            className={'register__input'}
            type={'text'}
            onChange={onChangeHandler}
            onKeyUp={formValidation}
            value={nickname}
            tabIndex={10}
          />
          <Button
            label={'중복확인'}
            disabled={!nicknameCheck}
            className={style.primary__button}
            buttonStyle={customStyle.button}
            onClickEvent={duplicateNicknameCheck}
          />
        </div>
      </section>
      <section className={'error'}>
        <Typography
          variant={'caption'}
          fontColor={nicknameCondition ? 'blue' : 'red'}
        >
          {nicknameMessage}
        </Typography>
      </section>
      <section className={'register-items pt-12'}>
        <Typography variant={'body2'}>휴대폰</Typography>
        <div className={'flex-justify-between'}>
          <input
            name={'phone'}
            placeholder={PLACEHOLDERS.phone}
            className={'register__input'}
            type={'tel'}
            onChange={onChangeHandler}
            onKeyUp={formValidation}
            value={phone}
            tabIndex={10}
          />
          <Button
            disabled={!phoneCheck}
            className={style.primary__button}
            buttonStyle={customStyle.button}
            label={'인증번호 받기'}
          />
        </div>
      </section>
      <section className={'error'}>
        <Typography variant={'caption'} fontColor={'red'}>
          {phoneMessage}
        </Typography>
      </section>
      <section className={cn('register-items pt-12')}>
        <Typography variant={'body2'}>성별</Typography>
        <div className={'flex items-end'}>
          <input
            checked={gender === 'male'}
            name={'gender'}
            type={'radio'}
            className={'mr-8'}
            onChange={onChangeHandler}
            tabIndex={10}
            value={'male'}
            id={'male'}
          />
          <label htmlFor={'male'} className={'mr-40 pointer'}>
            <Typography variant={'body2'} as={'span'}>
              남자
            </Typography>
          </label>
          <input
            name={'gender'}
            type={'radio'}
            className={'mr-8'}
            onChange={onChangeHandler}
            tabIndex={10}
            value={'female'}
            id={'female'}
          />
          <label htmlFor={'female'} className={'pointer'}>
            <Typography variant={'body2'} as={'span'}>
              여자
            </Typography>
          </label>
        </div>
      </section>
    </form>
  )
}
