import { useInView } from '@/lib/hooks/useInView'
import { useEffect } from 'react'

export default function FetchNext({ fetchNext }: { fetchNext: () => void }) {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNext()
    }
  }, [fetchNext, inView])

  return <div ref={ref} />
}
