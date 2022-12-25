import Button from '@/components/common/button/Button'
import Typography from '@/components/common/typography/Typography'
import StickyHeader from '@/components/layout/StickyHeader'
import styles from './Request.module.scss'
import { useState } from 'react'
import FileInput from '@/components/common/file-input/FileInput'
import Select from '@/components/common/select/Select'
import { useFileInput } from '@/lib/hooks/useFileInput'
import Textarea from '@/components/common/textarea/Textarea'
import DateSelect from '@/components/request/DateSelect'
import TimeSelect from '@/components/request/TimeSelect'
import {
  TattoType,
  SkinDiseaseType,
  TATTO_TYPE_LIST,
  SKIN_DISEASE_TYPE_LIST,
} from '@/constants/requestForm'

export default function Request() {
  const [selectedDate, setSelectedDate] = useState<number>(0)
  const [selectedTime, setSelectedTime] = useState<number>(0)

  const [tattoType, setTattoType] = useState<TattoType['value']>()
  const [diseaseType, setDiseaseType] = useState<SkinDiseaseType['value']>()

  const { handleFileInput, imageFileList } = useFileInput()
  const {
    handleFileInput: handleHopePatternFileInput,
    imageFileList: hopePatternImageFileList,
  } = useFileInput()

  const handleDate = (date: Date) => () => {
    setSelectedDate(date.getTime())
  }

  const handleTime = (time: number) => () => {
    setSelectedTime(time)
  }

  const handleTattoType = (value: TattoType['value']) => () => {
    setTattoType(value)
  }

  const handleSkinDiseaseType = (value: SkinDiseaseType['value']) => () => {
    setDiseaseType(value)
  }

  return (
    <>
      <StickyHeader top={0}>
        <div className={styles.header}>
          <Typography className="flex-1" variant="h3" fontWeight="medium">
            의뢰서
          </Typography>
          <Button variant="gray-outline">미리보기</Button>
          <Button variant={true ? 'gray' : 'black'} disabled>
            의뢰하기
          </Button>
        </div>
      </StickyHeader>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <article className={styles.card}>
            <Typography className="mb-24" fontColor="gray2" variant="body2">
              타투이스트
            </Typography>
            <Typography fontColor="gray1" variant="sub2">
              이름
            </Typography>
            <hr className="my-40" />
            <Typography className="mb-24" fontColor="gray2" variant="body2">
              의뢰일자
            </Typography>
            <div className="flex gap-24">
              <DateSelect selectedDate={selectedDate} handleDate={handleDate} />
              <TimeSelect selectedTime={selectedTime} handleTime={handleTime} />
            </div>
          </article>
          <article className={styles.card}>
            <Typography fontColor="gray2" variant="body2">
              타투 타입
            </Typography>
            <label className="flex gap-24 my-36">
              {TATTO_TYPE_LIST.map(({ type, value }) => {
                return (
                  <div className="flex gap-8 items-center" key={value}>
                    <input
                      className={styles.radio}
                      type="radio"
                      value={value}
                      name="tatto-type"
                      onChange={handleTattoType(value)}
                    />
                    <Typography>{type}</Typography>
                  </div>
                )
              })}
            </label>
            <div className="mb-96">
              <FileInput onChange={handleFileInput} />
            </div>

            <Typography className="mb-12" fontColor="gray2" variant="body2">
              타투 사이즈
            </Typography>
            <Select
              items={[{ value: 0, label: '직접입력' }]}
              onChange={function (value: unknown): void {
                throw new Error('Function not implemented.')
              }}
            />
            <Typography
              className="mt-36 mb-12"
              fontColor="gray2"
              variant="body2"
            >
              내용
            </Typography>
            <Textarea
              className={styles.textArea}
              placeholder="내용을 입력하세요"
            />
            <Typography
              className="mt-36 mb-12"
              fontColor="gray2"
              variant="body2"
            >
              본 게시물
            </Typography>
            <div>
              <label className="flex items-center gap-8">
                <input type="checkbox" />
                <span>의뢰에 참고 적용하기</span>
              </label>
            </div>
          </article>
          <article className={styles.card}>
            <Typography className="mb-12" fontColor="gray2" variant="body2">
              희망도안(선택)
            </Typography>
            <FileInput onChange={handleHopePatternFileInput} />

            <hr className="my-40" />

            <Typography className="mb-12" fontColor="gray2" variant="body2">
              피부질환 여부
            </Typography>
            <div className="flex gap-24">
              {SKIN_DISEASE_TYPE_LIST.map(({ type, value }) => {
                return (
                  <label key={value} className="flex gap-8 items-center">
                    <input
                      type="radio"
                      onClick={handleSkinDiseaseType(value)}
                      className={styles.radio}
                      value={value}
                      name="skin-disease-type"
                    />
                    <Typography>{type}</Typography>
                  </label>
                )
              })}
            </div>
            <Typography className="mt-24" fontColor="red" variant="body2">
              * 질환에 따라 시술이 거부 될 수 있습니다.
            </Typography>
            <Typography className="mt-8" fontColor="red" variant="body2">
              * 질환이 있음에도 이 사실을 거짓으로 통보하고 시술을 받은 경우
              모든 책임은 본인에게 있습니다.
            </Typography>
          </article>
        </section>
      </main>
    </>
  )
}
