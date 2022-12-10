import { useCallback, useEffect, useState } from 'react'
import { ins } from '../axios'
export const usePostList = () => {
  const [postList, setPostList] = useState([])

  const getPost = useCallback(async () => {
    const { data } = await ins.get<any>('')
    setPostList(() => [])
  }, [])

  useEffect(() => {
    getPost()
  }, [getPost])

  return { postList }
}
