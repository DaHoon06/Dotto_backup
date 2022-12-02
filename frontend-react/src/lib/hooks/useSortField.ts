import { useState } from 'react'

export const SORT_FIELD = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export const useSortField = () => {
  const [selected, setSelected] = useState(SORT_FIELD[0])

  return {
    selected,
    setSelected,
  }
}
