import DaumPostcodeEmbed from 'react-daum-postcode'
import React, { useState } from 'react'
import style from '@/assets/styles/common/button.module.scss'
import { Button } from '@/components/register/button/Button'
import './KakaoAddress.scss'

export interface IAddressInfo {
  address: string
  jibunAddress: string
}

interface AddressProp {
  addressInfo: (data: IAddressInfo) => void
}

export const KakaoAddress = (props: AddressProp) => {
  const { addressInfo } = props
  const [openPostcode, setOpenPostcode] = useState<boolean>(false)

  const customStyle = {
    button: {
      width: 'min(20vw, 120px)',
    } as React.CSSProperties,
  }

  const clickButton = () => {
    setOpenPostcode((current) => !current)
  }

  const selectedAddress = (data: any) => {
    const address = data.address
    const jibunAddress = data.jibunAddress
    const sendData = {
      address,
      jibunAddress,
    }
    addressInfo(sendData)
    modalClose()
  }

  const modalClose = () => {
    setOpenPostcode(false)
  }

  return (
    <>
      <Button
        label={'주소검색'}
        className={style.primary__button}
        buttonStyle={customStyle.button}
        onClickEvent={clickButton}
      />
      {openPostcode ? (
        <article className={'kakao-address--modal'}>
          <DaumPostcodeEmbed
            onComplete={selectedAddress}
            autoClose={true}
            className={'address-body'}
            animation={true}
          />
          <section className={'address-footer'}>
            <Button
              label={'닫기'}
              className={style.black__button}
              onClickEvent={modalClose}
            />
          </section>
        </article>
      ) : null}
    </>
  )
}
