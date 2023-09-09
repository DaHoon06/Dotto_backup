import '@/components/button/TopButton.scss'
import TOP from '@/assets/icons/main/go-top.svg'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'

export const TopButton = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type={'button'}
      onClick={scrollToTop}
      className={'top__button--container'}
    >
      <Image alt={'to the top'} width={13} height={7} src={TOP} />
      <Typography
        className={'pt-6'}
        variant={'caption'}
        fontWeight={'medium'}
        fontColor={'gray5'}
      >
        TOP
      </Typography>
    </button>
  )
}
