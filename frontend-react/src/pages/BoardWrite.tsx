import Button from '@/components/common/button/Button'
import Select from '@/components/common/select/Select'
import Typography from '@/components/common/typography/Typography'
import StickyHeader from '@/components/layout/StickyHeader'
import { CheckBox } from '@/components/register/icon/CheckBox'
import { Switch } from '@headlessui/react'
import { useCallback, useId, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ReactComponent as UploadIcon } from '@/assets/icons/common/upload.svg'
import styles from './BoardWrite.module.scss'
import Image from '@/components/common/image/Image'
import PriceInput from '@/components/board-write/PriceInput'
import TagInput from '@/components/board-write/TagInput'
import { BlogImage, fileToDataURL } from '@/lib/utils/fileToDataURL'
import { PLACEHOLDERS } from '@/constants/placeholders'

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
  const [images, setImages] = useState<BlogImage[]>([])

  const handleDelete = (i: number) => {
    setTags(tags.filter((_, index) => index !== i))
  }

  const handleAddition = (tag: string) => {
    setTags((prev) => [...prev, tag])
  }

  const onSubmit = useCallback(
    (data: Inputs) => {
      console.log(tags, images)
      console.log(data)
    },
    [images, tags]
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
                    <textarea
                      {...field}
                      placeholder={PLACEHOLDERS.plainText}
                      className={styles.textArea}
                    />
                  )
                }}
              />
            </div>

            <div className="flex-col">
              {images.length > 0 && (
                <ul className="flex gap-16 mt-32">
                  {images.map(({ source }, i) => {
                    return (
                      <Image
                        key={i}
                        className={styles.uploadImage}
                        src={source}
                        alt="upload image"
                      />
                    )
                  })}
                </ul>
              )}

              <label className={styles.uploadButton}>
                <UploadIcon width={18} height={18} />
                <Typography variant="body2" fontWeight="medium">
                  이미지 첨부
                </Typography>
                <input
                  type="file"
                  multiple
                  accept=".jpg, .jpeg, .png"
                  onChange={async (e) => {
                    const localFiles = e.target.files
                    if (localFiles == null) return

                    const blobImages = await Promise.all(
                      Array.from(localFiles).map(fileToDataURL)
                    )
                    setImages((prev) => [...prev, ...blobImages])
                    const formData = new FormData()
                    Array.from(localFiles).forEach((f) =>
                      formData.append('images', f)
                    )
                  }}
                />
              </label>

              <span className="flex-col">
                <Typography variant="body1" fontColor="gray3">
                  업로드 제한
                </Typography>
                <Typography variant="body1" fontColor="gray3">
                  최대 3장 / JPG / PNG / 5MB까지 등록가능
                </Typography>
              </span>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
