import Typography from '@/components/common/typography/Typography'
import Calendar from '@/components/mypage/Calendar'
import { ALL_REQUEST_TIMES } from '@/constants/requestForm'
import styles from './TransmissionList.module.scss'

export default function TransmissionList() {
  return (
    <section className={styles.section}>
      <div className={styles.transmissionList}>
        <Typography className="pl-12" variant="body1" fontWeight="bold">
          예약내역
        </Typography>
        <hr />
        <ul className={styles.listBox}>
          {[...new Array(10)].map((v) => {
            return (
              <li key={v}>
                <div className={styles.transmissionCard}>
                  <Typography variant="body2">2월 11일</Typography>
                  <Typography variant="caption" fontColor="gray2">
                    시술 어쩌고
                  </Typography>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.calendarSheet}>
        <Calendar />
      </div>
      <div className={styles.timeSheet}>
        <Typography className="pl-12" variant="body1" fontWeight="bold">
          시간
        </Typography>
        <hr />
        <ul className={styles.timesList}>
          {ALL_REQUEST_TIMES.map((time) => {
            return (
              <li key={time.value}>
                <Typography variant="body1" fontColor="gray1">
                  {time.label}
                </Typography>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
