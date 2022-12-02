import React, { useState } from 'react'

export const TattoistForm = (props: any) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    address: '',
    addressDetail: '',
    workspaceImg: '',
  })
  const { address, addressDetail, workspaceImg } = additionalInfo

  const additionalData = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    })
    return props.additionalData(additionalInfo)
  }

  return (
    <section className={'register-options'}>
      <section className={'register-items'}>
        <label>작업실 주소</label>
        <div className={'flex-justify-between'}>
          <input
            onChange={additionalData}
            className={'register__input'}
            type={'text'}
            placeholder={'주소찾기'}
            value={address}
            name={'address'}
          />
          <button className={'button'} type={'button'}>
            주소검색
          </button>
        </div>
      </section>
      <section className={'register-items'}>
        <div />
        <input
          onChange={additionalData}
          value={addressDetail}
          className={'register__input'}
          type={'text'}
          placeholder={'상세주소'}
          name={'addressDetail'}
        />
      </section>
      <section className={'register-items'}>
        <label>작업실 사진</label>
        <button className={'button'} type={'button'}>
          <input type={'file'} />
          이미지 첨부
        </button>
      </section>
    </section>
  )
}
