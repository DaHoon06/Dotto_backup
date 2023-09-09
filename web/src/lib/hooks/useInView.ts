import { useEffect, useRef, useState } from 'react'

export const useInView = () => {
  const ref = useRef(null)
  const [inView, setInView] = useState<boolean>()

  useEffect(() => {
    if (ref.current == null) return

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting)
      })
    }
    const observer = new IntersectionObserver(callback, {
      threshold: [0, 0.5, 1.0],
    })
    observer.observe(ref.current)
  }, [])

  return { ref, inView }
}
