export const fileToDataURL = (file: File) => {
  const reader = new FileReader()

  return new Promise<BlogImage>((res, rej) => {
    reader.onload = function onload(event) {
      res({
        source: event.target?.result as string,
        name: file.name,
        size: file.size,
        type: file.type,
      })
    }
    reader.readAsDataURL(file)
  })
}

export interface BlogImage {
  source?: string
  name: string
  size: number
  type: string
}
