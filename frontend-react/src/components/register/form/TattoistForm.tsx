import React, { useEffect, useState } from 'react'
import { FileUpload, IRegister } from '@/interfaces/register'
import Upload from '@/assets/icons/common/upload.svg'
import {
  IAddressInfo,
  KakaoAddress,
} from '@/components/utils/kakao-api/KakaoAddress'
import cn from 'classnames'
import Image from '@/components/common/image/Image'

export const TattoistForm = (props: IRegister.OPTIONS) => {
  const { userAdditionalInformation, validation } = props
  const [additionalInfo, setAdditionalInfo] = useState({
    address: '',
    addressDetail: '',
    workspaceImg: [],
  })
  const { address, addressDetail } = additionalInfo

  const sendData = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
    userAdditionalInformation(additionalInfo)
  }

  useEffect(() => {
    addressCheck()
  }, [additionalInfo])

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
  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileArr: Array<FileUpload[]> = []
    const { target } = e
    if (target.files) {
      const files = target.files
    }
  }

  return (
    <section className={'register-options'}>
      <section className={'register-items'}>
        <label>작업실 주소</label>
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
      <section className={'register-items mt-32'}>
        <label>작업실 사진</label>
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
              이미지 첨부
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
    </section>
  )
}
