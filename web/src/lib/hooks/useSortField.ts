import { useState } from 'react'

export const SORT_FIELD = [
  { name: '최신순', value: 'desc' },
  { name: '오래된순', value: 'asc' },
]

export const useSortField = () => {
  const [selected, setSelected] = useState(SORT_FIELD[0])

  return {
    selected,
    setSelected,
  }
}
