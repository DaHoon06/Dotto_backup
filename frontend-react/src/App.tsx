import { Header } from '@/components/common/header/Header'
import { Footer } from '@/components/common/footer/Footer'
import { Main } from '@/components/main'
import { Banner } from '@/components/banner'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

function App() {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return (
    <>
      <Header />
      {currentPath === '/' ? <Banner /> : ''}
      <Main />
      <Footer />
    </>
  )
}

export default App
