import { PLACEHOLDERS } from '@/constants/placeholders'
import { Button } from '@/components/register/button/Button'
import Typography from '@/components/common/typography/Typography'
import React from 'react'

export const SocialForm = () => {
  return (
    <form className={'form'}>
      <section className={'error'}>
        <Typography variant={'caption'} fontColor={'red'}>
          TEST
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
          />
          <Button label={'중복확인'} />
        </div>
      </section>
      <section className={'error'}>
        <Typography variant={'caption'} fontColor={'blue'}>
          TEST
        </Typography>
      </section>
    </form>
  )
}
