import SUBMIT from '@/assets/icons/myfeed/submit.svg'
import Image from '@/components/common/image/Image'

export const SubmitButton = () => {
  return (
    <button type={'button'}>
      <Image width={32} height={32} src={SUBMIT} alt={`comment submit`} />
    </button>
  )
}
