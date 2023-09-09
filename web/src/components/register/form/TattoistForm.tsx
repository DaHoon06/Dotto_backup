import React, { useEffect, useState } from 'react'
import { IRegister } from '@/interfaces/register'
import Upload from '@/assets/icons/common/upload.svg'
import XButton from '@/assets/icons/nav/x-button.svg'
import {
  IAddressInfo,
  KakaoAddress,
} from '@/components/utils/kakao-api/KakaoAddress'
import cn from 'classnames'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'

interface TattoistSubData {
  address: string
  addressDetail: string
  workspaceImg: Blob[]
}

export const TattoistForm = (props: IRegister.OPTIONS) => {
  const { userAdditionalInformation, validation } = props
  const [additionalInfo, setAdditionalInfo] = useState<TattoistSubData>({
    address: '',
    addressDetail: '',
    workspaceImg: [],
  })
  const { address, addressDetail } = additionalInfo
  const [preview, setPreview] = useState<any>([])

  useEffect(() => {
    addressCheck()
    userAdditionalInformation(additionalInfo)
  }, [additionalInfo])

  const sendData = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
  }

  const addressCheck = (): void => {
    const check = address.length > 0 && addressDetail.length > 0
    validation({ additional: check })
  }

  const addressInfo = (props: IAddressInfo): void => {
    const { address, jibunAddress } = props
    setAdditionalInfo({
      ...additionalInfo,
      address: address || jibunAddress,
    })
  }

  //TODO
  // 파일 업로드
  const upload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileArr: Array<File> = []
    const { target } = e

    const formData = new FormData()

    if (target.files) {
      const { files } = target
      const reader = new FileReader()
      let images = [...preview]

      for (let i = 0; i < files.length; i++) {
        const currentImageUrl = URL.createObjectURL(files[i])
        formData.append('files', files[i])
        images.push(currentImageUrl)
        fileArr.push(files[i])
      }

      if (images.length > 3) images = images.slice(0, 3)
      setPreview(images)

      setAdditionalInfo({
        ...additionalInfo,
        workspaceImg: fileArr,
      })
    }
  }

  const deletePreview = (index: number) => {
    preview.splice(index, 1)
    setPreview([...preview])
  }

  return (
    <section className={'register-options--tattoist__form scroll'}>
      <section className={'register-items'}>
        <Typography variant={'body2'} fontColor={'gray1'}>
          작업실 주소
        </Typography>
        <div className={'flex-justify-between'}>
          <input
            disabled={true}
            className={cn('register__input')}
            type={'text'}
            placeholder={'주소찾기'}
            value={address}
            name={'address'}
          />
          <KakaoAddress addressInfo={addressInfo} />
        </div>
      </section>
      <section className={'register-items mt-16'}>
        <div />
        <input
          onChange={sendData}
          value={addressDetail}
          className={'register__input'}
          type={'text'}
          placeholder={'상세주소'}
          name={'addressDetail'}
        />
      </section>
      <section className={'register-items mt-16'}>
        <Typography variant={'body2'} fontColor={'gray1'}>
          작업실 사진
        </Typography>
        <section className="upload-container">
          <div className="upload__button mt-20">
            <label htmlFor="addFile" className={'flex justify-center'}>
              <Image
                className="upload"
                src={Upload}
                alt="upload"
                width={36}
                height={36}
              />
              <Typography variant={'caption'} fontColor={'gray1'} as={'span'}>
                이미지 첨부
              </Typography>
            </label>
            <input
              type="file"
              id="addFile"
              onChange={upload}
              multiple
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </section>
      </section>
      <p className={'register-items left'}>
        <span />
        <Typography variant={'body2'} fontColor={'gray3'}>
          이미지 확장자
        </Typography>
      </p>
      {preview && (
        <section className={'register-items mb-16'}>
          <div />
          <section className={'left flex'}>
            {preview.map((src: string, index: number) => {
              return (
                <div className={'preview mr-16'} key={index}>
                  <Image alt={'preview'} src={src} width={80} height={80} />
                  <button
                    type={'button'}
                    className={'preview-delete__button'}
                    onClick={() => deletePreview(index)}
                  >
                    <Image alt={'delete-preview-button'} src={XButton} />
                  </button>
                </div>
              )
            })}
          </section>
        </section>
      )}
    </section>
  )
}
