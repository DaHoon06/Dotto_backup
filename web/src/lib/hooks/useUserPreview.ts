import { useCallback, useState } from 'react'
import { ins as axios } from '@/lib/axios'

export const useUserPreview = (type: string) => {
  const [list, setList] = useState([])

  const getUserList = useCallback(async () => {
    await axios.get('')
  }, [])
}
