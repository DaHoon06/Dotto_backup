import { Header } from '@/components/common/header/Header'
import { Footer } from '@/components/common/footer/Footer'
import { Main } from '@/components/main'
import { Banner } from '@/components/banner'
import { useEffect, useState } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const path = window.location.pathname
    setCurrentPath(path)
  }, [currentPath])
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
