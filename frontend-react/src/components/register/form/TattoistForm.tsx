import React, { useState } from 'react'
import { IRegister } from '@/interfaces/register'
import { Button } from '@/components/register/button/Button'
import Upload from '@/assets/icons/common/upload.svg'
import style from '@/assets/styles/common/button.module.scss'

export const TattoistForm = (props: IRegister.OPTIONS) => {
  const { additionalData } = props
  const [additionalInfo, setAdditionalInfo] = useState({
    address: '',
    addressDetail: '',
    workspaceImg: '',
  })
  const { address, addressDetail, workspaceImg } = additionalInfo

  const customStyle = {
    button: {
      width: '120px',
    } as React.CSSProperties,
  }

  const sendData = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
    return additionalData(additionalInfo)
  }

  return (
    <section className={'register-options'}>
      <section className={'register-items'}>
        <label>작업실 주소</label>
        <div className={'flex-justify-between'}>
          <input
            onChange={sendData}
            className={'register__input'}
            type={'text'}
            placeholder={'주소찾기'}
            value={address}
            name={'address'}
          />
          <Button
            label={'주소검색'}
            className={style.primary__button}
            buttonStyle={customStyle.button}
          />
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
              <img
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
              multiple
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </section>
      </section>
    </section>
  )
}
