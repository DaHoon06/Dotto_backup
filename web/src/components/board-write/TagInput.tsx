import { ComponentProps, useState } from 'react'
import FilterChip from '../board/FilterChip'
import styles from './TagInput.module.scss'

interface ITagInput extends ComponentProps<'input'> {
  className?: string
  tags: string[]
  handleDelete: (i: number) => void
  handleAddition: (tag: string) => void
  maxLength?: number
}
export default function TagInput(props: ITagInput) {
  const {
    tags,
    handleAddition,
    handleDelete,
    className,
    maxLength = 10,
    ...rest
  } = props
  const [input, setInput] = useState('')

  return (
    <div className="flex">
      <ul className="flex gap-16">
        {tags?.map((tag, i) => {
          return (
            <FilterChip
              key={tag + i}
              onClcikCloseButton={() => handleDelete(i)}
            >
              {tag}
            </FilterChip>
          )
        })}
      </ul>
      <input
        className={styles.tagInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}
        onKeyUp={(e) => {
          if (
            e.key === 'Enter' &&
            input.length > 0 &&
            tags.length < maxLength
          ) {
            handleAddition(input)
            setInput(() => '')
            return false
          }
          if (e.key === 'Backspace' && input.length === 0) {
            handleDelete(tags.length - 1)
            return false
          }
        }}
        {...rest}
      />
    </div>
  )
}
