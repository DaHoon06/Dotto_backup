import { useCalendar } from '@h6s/calendar'
import classNames from 'classnames/bind'
import { format } from 'date-fns'
import { ChevronIcon } from '../common/icons'
import Typography from '../common/typography/Typography'
import styles from './Calendar.module.scss'
import locale from 'date-fns/locale/ko'
const cx = classNames.bind(styles)

export default function Calendar() {
  const { headers, body, cursorDate, navigation } = useCalendar()

  return (
    <div className={styles.calendar}>
      <span className="flex items-center gap-12">
        <ChevronIcon className="pointer" onClick={navigation.toPrev} />
        <ChevronIcon
          className="rotate-180 pointer"
          onClick={navigation.toNext}
        />
        <Typography variant="h2" className="flex-1" fontWeight="bold">
          {format(cursorDate, 'yyyy년 MMMM', { locale })}
        </Typography>
      </span>
      <div className={cx('mt-32 mb-12', styles.calendarWeekends)}>
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
          <div className={cx('', styles.body)} key={key}>
            {days.map((day) => {
              const {
                key,
                date,
                isCurrentDate,
                isCurrentMonth,
                isWeekend,
                value,
              } = day

              return (
                <Typography
                  key={key}
                  as="span"
                  className={cx(styles.day, { isCurrentMonth })}
                  fontColor={isWeekend ? 'red' : 'gray1'}
                  fontWeight={isCurrentDate ? 'bold' : 'medium'}
                >
                  {date}
                </Typography>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
