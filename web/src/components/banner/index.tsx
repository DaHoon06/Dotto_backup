import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '@/components/common/image/Image'
import { ins } from '@/lib/axios'

const TOTAL_SLIDES = 3

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const slideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    slideTransition()
    const timer = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => clearInterval(timer)
  }, [currentSlide])

  const slideTransition = () => {
    const { current } = slideRef
    if (current !== null) {
      current.style.transition = 'all 0.5s ease-in-out'
      if (currentSlide === 0)
        current.style.transform = `translateX(-${currentSlide}00%)`
      else current.style.transform = `translateX(-${currentSlide}00%)`
    }
  }

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  const api = async () => {
    try {
      const { data } = await ins.get('/follower/2')
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <article className={'banner'}>
      <button type={'button'} onClick={prevSlide} className={'slide--prev'}>
        {'<'}
      </button>
      <div ref={slideRef} className={'img-group'}>
        {[...new Array(4)].map((img, index) => {
          return (
            <Link className={'img__anchor'} to={`/`} key={index}>
              <Image
                alt={`banner-${index}`}
                src={img?.src || 'https://picsum.photos/300/300'}
                className={'img'}
              />
            </Link>
          )
        })}
      </div>

      <button type={'button'} onClick={nextSlide} className={'slide--next'}>
        {'>'}
      </button>
    </article>
  )
}
