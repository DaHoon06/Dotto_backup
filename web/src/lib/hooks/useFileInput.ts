import { useState, ChangeEventHandler } from 'react'

export const useFileInput = () => {
  const [imageFileList, setImageFileList] = useState<FormData>()

  const handleFileInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const localFiles = e.target.files
    if (localFiles == null) return

    const formData = new FormData()
    Array.from(localFiles).forEach((f) => formData.append('images', f))
    setImageFileList(formData)
  }

  return { imageFileList, handleFileInput }
}
