import {
  AFTERNOON_REQUEST_TIMES,
  MORNING_REQUEST_TIMES,
} from '@/constants/requestForm'
import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import { format } from 'date-fns'
import Button from '../common/button/Button'
import { ClockIcon } from '../common/icons'
import Typography from '../common/typography/Typography'
import styles from './Select.module.scss'
const cx = classNames.bind(styles)

interface ITimeSelect {
  handleTime: (time: number) => () => void
  selectedTime: number
}

export default function TimeSelect({ handleTime, selectedTime }: ITimeSelect) {
  return (
    <Menu as="div" className={styles.dateMenu}>
      <Menu.Button as="div">
        {({ open }) => {
          return (
            <Button
              className={cx(styles.dateButton, { open })}
              icon={<ClockIcon stroke={open ? '#ff5831' : '#222'} />}
              variant="gray-outline"
            >
              <Typography
                as="span"
                variant="body1"
                fontColor={open ? 'primary' : 'gray1'}
              >
                {selectedTime ? format(selectedTime, 'hh:mm') : '시간선택'}
              </Typography>
            </Button>
          )
        }}
      </Menu.Button>
      <Menu.Items className={styles.menuItems}>
        <div className="flex flex-col gap-12">
          <Typography variant="body1" fontColor="gray3">
            오전
          </Typography>
          <ol className={styles.timeList}>
            {MORNING_REQUEST_TIMES.map(({ value, label }) => {
              const isSelected = value === selectedTime
              return (
                <li
                  className={cx(styles.timeChip, { isSelected })}
                  key={value}
                  onClick={handleTime(value)}
                >
                  {label}
                </li>
              )
            })}
          </ol>
          <Typography className="mt-24" variant="body1" fontColor="gray3">
            오후
          </Typography>
          <ol className={styles.timeList}>
            {AFTERNOON_REQUEST_TIMES.map(({ value, label }) => {
              const isSelected = value === selectedTime

              return (
                <li
                  className={cx(styles.timeChip, { isSelected })}
                  key={value}
                  onClick={handleTime(value)}
                >
                  {label}
                </li>
              )
            })}
          </ol>
        </div>
      </Menu.Items>
    </Menu>
  )
}
