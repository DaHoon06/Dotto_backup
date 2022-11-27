import './index.scss'
import { Dotto } from '@/components/dotto'
import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'
import { Banner } from '@/components/banner'

export const Main = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const path = window.location.pathname
    setCurrentPath(path)
  }, [currentPath])

  return (
    <main className={'main'}>
      {currentPath === '/' ? (
        <>
          <section>
            <h1>닷투게시판</h1>
            <h2>타투이스트가 올린 다양한 작품 중 내 취향을 찾아보세요!</h2>
            <Dotto />
          </section>
          <section>
            <h1>닷찾사 게시판</h1>
            <h2>내가 원하는 도안을 제시하고 타투이스트에게 답변 받아보세요!</h2>
            <Dotto />
          </section>
          <section>
            <h1>FEED</h1>
            <h2>자유롭게 이야기를 나눠요!</h2>
            <Dotto />
          </section>
        </>
      ) : (
        <Outlet />
      )}
    </main>
  )
}
