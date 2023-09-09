import spinner from '@/assets/icons/common/spinner.gif'
import style from './Spinner.module.scss'

export const Spinner = () => {
  return (
    <span className={style.spinner}>
      <img src={spinner} alt={'loading'} width={42} height={42} />
    </span>
  )
}
