import { useState } from 'react'

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue)

  const toggle = () => {
    setValue((prev) => !prev)
  }

  return {
    value,
    toggle,
  }
}
