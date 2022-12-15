import cn from 'classnames'
import Image from '@/components/common/image/Image'
import {
  TATTOOIST,
  TATTOOIST_ACTIVE,
  USER,
  USER_ACTIVE,
} from '@/assets/icons/register'
import { Button } from '@/components/register/button/Button'
import style from '@/assets/styles/common/button.module.scss'
import Typography from '@/components/common/typography/Typography'
import React from 'react'
import useRegister from '@/lib/hooks/useRegister'
import { IRegister } from '@/interfaces/register'
import { PLACEHOLDERS } from '@/constants/placeholders'

export const CommonForm = (props: IRegister.PROPS) => {
  const { registerState, registerEvent, customStyle } = useRegister(props)
  const { inputValue, message, formType, validateCheck } =
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

  const {
    onClickUserType,
    onChangeHandler,
    formValidation,
    duplicateIdCheck,
    duplicateNicknameCheck,
  } = registerEvent

  return (
    <form className={'register__form'}>
      <section className={'register-items-top'}>
        <label>이용목적</label>
        <section className={'flex'}>
          <button
            onClick={() => onClickUserType(true)}
            type={'button'}
            name={'user'}
            className={cn(
              formType
                ? 'register__button--tab-active  mr-16'
                : 'register__button--tab  mr-16'
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

            <span>일반</span>
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
            <span>타투이스트</span>
          </button>
        </section>
      </section>

      <section className={'register-items pt-40'}>
        <label>아이디</label>
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
        <Typography variant={'caption'} fontColor={'red'}>
          {idMessage}
        </Typography>
      </section>

      <section className={'register-items pt-12'}>
        <label>비밀번호</label>
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
        <label>비밀번호 확인</label>
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
        <label>닉네임</label>
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
        <Typography variant={'caption'} fontColor={'red'}>
          {nicknameMessage}
        </Typography>
      </section>
      <section className={'register-items pt-12'}>
        <label>휴대폰</label>
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
        <label>성별</label>
        <div className={'flex'}>
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
            남자
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
            여자
          </label>
        </div>
      </section>
    </form>
  )
}
