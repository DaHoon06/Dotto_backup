import { Header } from '@/components/common/header/Header'
import { Footer } from '@/components/common/footer/Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
