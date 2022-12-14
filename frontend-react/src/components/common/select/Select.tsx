import { Listbox } from '@headlessui/react'
import styles from './Select.module.scss'
import { ReactComponent as DropDownIcon } from '@/assets/icons/common/btn-dropdown-24.svg'
import Typography from '../typography/Typography'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
interface ISelect<T> {
  items: SelectItem<T>[]
  currentValue?: T
  onChange: (value: T) => void
  placeholder?: string
}

interface SelectItem<T> {
  value: T
  label: string
}

export default function Select<T>(props: ISelect<T>) {
  const { items, currentValue, onChange, placeholder } = props
  const currentItem = items.find((item) => item.value === currentValue)

  return (
    <Listbox value={currentItem?.value ?? null} onChange={onChange}>
      <div className={styles.listbox}>
        <Listbox.Button className={styles.listboxButton}>
          {({ open }) => {
            return (
              <>
                <Typography
                  variant="sub2"
                  fontWeight="medium"
                  fontColor="gray1"
                >
                  {currentItem?.label ?? placeholder}
                </Typography>
                <DropDownIcon
                  className={cx(styles.dropdown, { opened: open })}
                />
              </>
            )
          }}
        </Listbox.Button>
        <Listbox.Options className={styles.options}>
          {items.map((item, index) => {
            return (
              <Listbox.Option key={index} value={item.value}>
                {({ selected, active }) => {
                  return (
                    <Typography
                      className={cx(styles.option, { selected, active })}
                      variant="sub2"
                      fontWeight={selected ? 'bold' : 'medium'}
                      fontColor="gray1"
                    >
                      {item.label}
                    </Typography>
                  )
                }}
              </Listbox.Option>
            )
          })}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}
