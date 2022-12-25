import { useCalendar } from '@h6s/calendar'
import { Menu } from '@headlessui/react'
import classNames from 'classnames/bind'
import { format } from 'date-fns'
import Button from '../common/button/Button'
import { CalendarIcon, ChevronIcon } from '../common/icons'
import Typography from '../common/typography/Typography'
import locale from 'date-fns/locale/en-US'
import styles from './Select.module.scss'
const cx = classNames.bind(styles)

interface IDateSelect {
  handleDate: (date: Date) => () => void
  selectedDate: number
}

export default function DateSelect({ handleDate, selectedDate }: IDateSelect) {
  const { headers, body, cursorDate, navigation } = useCalendar()

  return (
    <Menu as="div" className={styles.dateMenu}>
      <Menu.Button as="div">
        {({ open }) => {
          return (
            <Button
              className={cx(styles.dateButton, { open })}
              icon={<CalendarIcon fill={open ? '#ff5831' : '#222'} />}
              variant="gray-outline"
            >
              <Typography
                as="span"
                variant="body1"
                fontColor={open ? 'primary' : 'gray1'}
              >
                {selectedDate ? format(selectedDate, 'MM월 dd일') : '날짜선택'}
              </Typography>
            </Button>
          )
        }}
      </Menu.Button>
      <Menu.Items className={styles.menuItems}>
        <div>
          <span className="flex items-center">
            <Typography variant="sub2" className="flex-1" fontWeight="bold">
              {format(cursorDate, 'MMMM yyyy')}
            </Typography>
            <ChevronIcon className="pointer" onClick={navigation.toPrev} />
            <ChevronIcon
              className="rotate-180 pointer"
              onClick={navigation.toNext}
            />
          </span>
          <div className={cx('my-24', styles.body)}>
            {headers.weekDays.map(({ key, value }) => {
              return (
                <div key={key} data-testid="calendar-weekends">
                  {format(value, 'E', { locale })}
                </div>
              )
            })}
          </div>

          {body.value.map((week) => {
            const { key, value: days } = week

            return (
              <div className={cx('my-10', styles.body)} key={key}>
                {days.map((day) => {
                  const {
                    key,
                    date,
                    isCurrentDate,
                    isCurrentMonth,
                    isWeekend,
                    value,
                  } = day

                  const isSelected = selectedDate === value.getTime()
                  return (
                    <Typography
                      key={key}
                      as="span"
                      className={cx(styles.day, {
                        isCurrentMonth,
                        isSelected,
                      })}
                      fontColor={isWeekend ? 'red' : 'gray1'}
                      fontWeight={isCurrentDate ? 'bold' : 'medium'}
                      onClick={handleDate(value)}
                    >
                      {date}
                    </Typography>
                  )
                })}
              </div>
            )
          })}
        </div>
      </Menu.Items>
    </Menu>
  )
}
