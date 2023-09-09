import React, { useEffect, useState } from 'react'
import Typography from '@/components/common/typography/Typography'
import { IRegister } from '@/interfaces/register'
import {
  GOOGLE_ICON,
  NAVER_ICON,
  INSTAGRAM_ICON,
  KAKAO_ICON,
} from '@/assets/icons/social/index'
import Image from '@/components/common/image/Image'
import cn from 'classnames'

const socialLabel = [
  {
    id: 1,
    label: '카카오 계정',
    placeholder: '아이디를 입력해주세요.',
    src: KAKAO_ICON,
  },
  {
    id: 2,
    label: '구글 이메일',
    placeholder: '이메일을 입력해주세요.',
    src: GOOGLE_ICON,
  },
  {
    id: 3,
    label: '네이버 이메일',
    placeholder: '이메일을 입력해주세요.',
    src: NAVER_ICON,
  },
  {
    id: 4,
    label: '인스타 계정',
    placeholder: '아이디를 입력해주세요.',
    src: INSTAGRAM_ICON,
  },
]

interface ButtonType {
  id: number
  label: string
  placeholder: string
  src: string
}

export const UserForm = (props: IRegister.OPTIONS) => {
  const { userAdditionalInformation, validation } = props
  const [additionalInfo, setAdditionalInfo] = useState({
    contactType: 1,
    contactValue: '',
  })
  const [socialType, setSocialType] = useState(1)
  const [selectedSocialButton, setSelectedSocialButton] = useState<
    ButtonType[]
  >([{ id: 0, label: '', placeholder: '', src: '' }])

  useEffect(() => {
    const type = socialLabel.filter((value) => value.id === socialType)
    setSelectedSocialButton(type)
  }, [socialType])

  const { contactType, contactValue } = additionalInfo
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    userAdditionalInformation(additionalInfo)
  }, [additionalInfo])

  const onChangeHandlerContactValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setAdditionalInfo({
      ...additionalInfo,
      contactType: socialType,
      contactValue: value,
    })
  }

  const SocialButton = () => {
    return (
      <section className={'pt-20'}>
        {socialLabel.map((value) => (
          <button
            type={'button'}
            onClick={() => setSocialType(value.id)}
            key={value.id}
          >
            <Image
              alt={'social contact type kakao'}
              src={value.src}
              className={cn(
                socialType === value.id ? 'social-icons--active' : '',
                'mr-24 social-icons'
              )}
            />
          </button>
        ))}
      </section>
    )
  }

  return (
    <section className={'scroll'}>
      <Typography variant={'body2'} className={'pt-24'} fontColor={'gray2'}>
        타투이스트와 연락할 수단을 선택해 주세요.
      </Typography>

      <SocialButton />

      <section className={'social-info--wrapper'}>
        <Typography variant={'body2'} fontColor={'gray2'} className={'pr-30'}>
          {selectedSocialButton[0].label}
        </Typography>
        <input
          className={'register__input'}
          type={'text'}
          name={'contactValue'}
          value={contactValue}
          placeholder={selectedSocialButton[0].placeholder}
          onChange={onChangeHandlerContactValue}
        />
      </section>
    </section>
  )
}
