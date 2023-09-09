import { useCallback, useEffect, useState } from 'react'
import { ins } from '../axios'

export const usePost = (postNo?: string) => {
  const [post, setPost] = useState({})

  const getPost = useCallback(async () => {
    const { data } = await ins.get<any>('')
    setPost(() => ({}))
  }, [])

  useEffect(() => {
    getPost()
  }, [getPost])

  return { post }
}
