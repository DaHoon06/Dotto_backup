import Button from '@/components/common/button/Button'
import Select from '@/components/common/select/Select'
import Typography from '@/components/common/typography/Typography'
import StickyHeader from '@/components/layout/StickyHeader'
import { CheckBox } from '@/components/register/icon/CheckBox'
import { Switch } from '@headlessui/react'
import { ChangeEventHandler, useCallback, useId, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styles from './BoardWrite.module.scss'
import PriceInput from '@/components/board-write/PriceInput'
import TagInput from '@/components/board-write/TagInput'
import { PLACEHOLDERS } from '@/constants/placeholders'
import FileInput from '@/components/common/file-input/FileInput'
import { useFileInput } from '@/lib/hooks/useFileInput'
import Textarea from '@/components/common/textarea/Textarea'

const GENRE_SELECT = [
  {
    value: 1,
    label: '꽃',
  },
  {
    value: 2,
    label: '나비',
  },
  {
    value: 3,
    label: '레터링',
  },
]
const TIME_SELECT = [
  {
    value: 1,
    label: '30분',
  },
  {
    value: 2,
    label: '1시간',
  },
  {
    value: 3,
    label: '1시간 30분',
  },
]

interface Inputs {
  title: string
  genre: number
  tiemTaken: number
  isDiscounted?: boolean
  discountedPrice?: number
  originPrice: number
  plainText: string
  files: FormData[]
}

export default function BoardWrite() {
  const formId = useId()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const [tags, setTags] = useState<string[]>([])
  const { handleFileInput, imageFileList } = useFileInput()

  const handleDelete = (i: number) => {
    setTags(tags.filter((_, index) => index !== i))
  }

  const handleAddition = (tag: string) => {
    setTags((prev) => [...prev, tag])
  }

  const onSubmit = useCallback(
    (data: Inputs) => {
      console.log(tags, imageFileList)
      console.log(data)
    },
    [imageFileList, tags]
  )

  return (
    <>
      <StickyHeader>
        <div className={styles.stickyHeader}>
          <Button
            type="submit"
            form={formId}
            className={styles.submitButton}
            variant="black"
          >
            <Typography variant="sub2" fontColor="white" fontWeight="medium">
              등록하기
            </Typography>
          </Button>
        </div>
      </StickyHeader>
      <main className={styles.main}>
        <section>
          <Typography variant="h2" fontColor="gray1" fontWeight="semibold">
            닷투 게시글 작성
          </Typography>
          <form
            className={styles.form}
            id={formId}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className={styles.textInput}
              placeholder={PLACEHOLDERS.title}
              type="text"
            />
            <hr className={styles.hr} />
            <div className="flex gap-24">
              <Controller
                control={control}
                name="genre"
                render={({ field }) => {
                  return (
                    <Select
                      items={GENRE_SELECT}
                      placeholder={PLACEHOLDERS.genre}
                      currentValue={field.value}
                      onChange={field.onChange}
                    />
                  )
                }}
              />
              <Controller
                control={control}
                name="tiemTaken"
                render={({ field }) => {
                  return (
                    <Select
                      items={TIME_SELECT}
                      placeholder={PLACEHOLDERS.timeTaken}
                      currentValue={field.value}
                      onChange={field.onChange}
                    />
                  )
                }}
              />
            </div>
            <hr className={styles.hr} />

            <div className="flex gap-64 items-center">
              <Controller
                control={control}
                rules={{ pattern: /^[0-9]*$/ }}
                name="discountedPrice"
                render={({ field, formState }) => {
                  return (
                    <div className="flex-col gap-2">
                      <PriceInput
                        value={field.value ?? ''}
                        onChange={field.onChange}
                        disabled={watch('isDiscounted')}
                      />
                      {errors.discountedPrice?.type === 'pattern' && (
                        <Typography fontColor="red">
                          숫자만 입력해 주세요.
                        </Typography>
                      )}
                    </div>
                  )
                }}
              />
              <Controller
                control={control}
                name="isDiscounted"
                render={({ field }) => {
                  return (
                    <Switch
                      checked={field.value ?? false}
                      onChange={field.onChange}
                      className="flex items-center gap-8"
                    >
                      <CheckBox checkActive={field.value ?? false} />
                      <Typography
                        className={styles.customText}
                        variant="sub2"
                        fontWeight="medium"
                      >
                        할인 이벤트
                      </Typography>
                    </Switch>
                  )
                }}
              />
            </div>

            <div className="flex gap-48 mt-48">
              <Controller
                control={control}
                rules={{ pattern: /^[0-9]*$/ }}
                name="discountedPrice"
                render={({ field, formState }) => {
                  return (
                    <div className="flex-col gap-2">
                      <PriceInput
                        label="정상가격"
                        value={field.value ?? ''}
                        onChange={field.onChange}
                        disabled={!watch('isDiscounted')}
                      />
                      {errors.discountedPrice?.type === 'pattern' && (
                        <Typography fontColor="red">
                          숫자만 입력해 주세요.
                        </Typography>
                      )}
                    </div>
                  )
                }}
              />
              <Controller
                control={control}
                rules={{ pattern: /^[0-9]*$/ }}
                name="discountedPrice"
                render={({ field }) => {
                  return (
                    <div className="flex-col gap-2">
                      <PriceInput
                        label="할인가격"
                        value={field.value ?? ''}
                        onChange={field.onChange}
                        disabled={!watch('isDiscounted')}
                      />
                      {errors.discountedPrice?.type === 'pattern' && (
                        <Typography fontColor="red">
                          숫자만 입력해 주세요.
                        </Typography>
                      )}
                    </div>
                  )
                }}
              />
            </div>

            <hr className={styles.hr} />
            <div className={styles.textAreaBox}>
              <TagInput
                placeholder={PLACEHOLDERS.tags}
                tags={tags}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                maxLength={3}
              />
              <hr className="mt-16 mb-24" />
              <Controller
                control={control}
                name="plainText"
                render={({ field }) => {
                  return (
                    <Textarea {...field} placeholder={PLACEHOLDERS.plainText} />
                  )
                }}
              />
            </div>

            <FileInput onChange={handleFileInput} />
          </form>
        </section>
      </main>
    </>
  )
}
