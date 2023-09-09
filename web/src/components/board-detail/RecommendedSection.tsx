import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '../common/image/Image'

import Typography from '../common/typography/Typography'
import styles from './RecommendedSection.module.scss'

export default function RecommendedSection() {
  return (
    <section className={styles.recommendSection}>
      <Typography variant="h3" fontWeight="medium" fontColor="gray1">
        이 아티스트의 다른 작품 보기
      </Typography>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {[...new Array(10)].map((v, i) => {
            return (
              <SwiperSlide key={i + 1}>
                <Image className={styles.recommendPost} alt={`${i}`} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
