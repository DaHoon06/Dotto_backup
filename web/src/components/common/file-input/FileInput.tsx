import { BlogImage, fileToDataURL } from '@/lib/utils/fileToDataURL'
import React, { ComponentProps, useState } from 'react'
import Image from '../image/Image'
import Typography from '../typography/Typography'
import styles from './FileInput.module.scss'
import { ReactComponent as UploadIcon } from '@/assets/icons/common/upload.svg'
import { wrapEvent } from '@/lib/utils/wrapEvent'

interface IFileInput extends ComponentProps<'input'> {}

export default function FileInput(props: IFileInput) {
  const { onChange, ...rest } = props
  const [images, setImages] = useState<BlogImage[]>([])

  const handleFileInput: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const localFiles = e.target.files
    if (localFiles == null) return

    const blobImages = await Promise.all(
      Array.from(localFiles).map(fileToDataURL)
    )
    setImages((prev) => [...blobImages])
  }

  return (
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
          onChange={wrapEvent(handleFileInput, onChange)}
          {...rest}
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
  )
}
