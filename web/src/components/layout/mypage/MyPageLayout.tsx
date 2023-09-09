import { Outlet, useLocation } from 'react-router'
import StickyHeader from '../StickyHeader'
import MyPageSideMenu, { MenuItem } from './MyPageSideMenu'
import styles from './MyPageLayout.module.scss'

export default function MyPageLayout() {
  const SIDE_MENUS: MenuItem[] = [
    { key: '1', label: '의뢰서 전송 목록', path: '/mypage/transmission-list' },
    { key: '2', label: '예약 진행 목록', path: '/mypage/progress-list' },
    { key: '3', label: '예약 완료 내역', path: '/mypage/complete-list' },
    { key: '4', label: '예약 취소 내역', path: '/mypage/cancellation-list' },
    { key: '5', label: '타투 시술 내역', path: '/mypage/procedure-history' },
    { key: '6', label: '비밀번호 변경?', path: '/mypage/change-password' },
    { key: '7', label: '회원탈퇴?', path: '/mypage/withdrawl' },
  ]
  const { pathname } = useLocation()
  const currentPathIndex = SIDE_MENUS.findIndex((item) =>
    pathname.startsWith(item.path)
  )

  const title = SIDE_MENUS[currentPathIndex]?.label ?? '마이 페이지'
  return (
    <>
      <StickyHeader className={styles.header} top={0}>
        {title}
      </StickyHeader>
      <main className={styles.main}>
        <MyPageSideMenu items={SIDE_MENUS} />
        <Outlet />
      </main>
    </>
  )
}
