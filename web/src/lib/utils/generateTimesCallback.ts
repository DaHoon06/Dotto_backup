import { HALF_HOUR, HOUR } from '@/constants/requestForm'
import { format } from 'date-fns'

export const generateTimesCallback =
  (mnimumHour: number) => (_: number, i: number) => {
    //note 15 * HOUR (UTC는 오전 9시부터임)
    const time = i * HALF_HOUR + 15 * HOUR + mnimumHour * HOUR
    return { label: format(time, 'hh:mm'), value: time }
  }
