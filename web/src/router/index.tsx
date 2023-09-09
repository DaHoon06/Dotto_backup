import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import { Main } from '@/components/home'
import MainLayout from '@/components/layout/MainLayout'
import { KakaoLoginSuccess } from '@/components/utils/kakao-api/KakaoLoginSuccess'
import { SearchResults } from '@/pages/search/SearchResults'
import Request from '@/pages/request/Request'
import { UserResults } from '@/components/search/UserResults'
import { SearchIndex } from '@/components/search/SearchIndex'
import { FeedIndex, FeedPost, FeedDetail } from '@/pages/feed/index'
import BoardPost from '@/pages/board/BoardPost'
import BoardPostDetail from '@/pages/board/BoardPostDetail'
import BoardWrite from '@/pages/board/BoardWrite'
import MyPageLayout from '@/components/layout/mypage/MyPageLayout'
import TransmissionList from '@/pages/mypage/TransmissionList'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/dotto/board" />} />
        <Route path="dotto">
          <Route path="board">
            <Route index element={<Main />} />
            <Route path="post" element={<BoardPost />} />
            <Route path="view/:postNo" element={<BoardPostDetail />} />
            <Route path="write" element={<BoardWrite />} />
          </Route>
        </Route>

        <Route path="search" element={<SearchResults />}>
          <Route index path="result" element={<SearchIndex />} />
          <Route path="menu" element={<UserResults />} />
        </Route>

        <Route path="estimate/:postNo" />
        <Route path="401" />
        <Route path="*" />
      </Route>

      <Route path="mypage" element={<MyPageLayout />}>
        <Route index element={<TransmissionList />} />
        <Route path="transmission-list" element={<TransmissionList />} />
        <Route path="progress-list" element={<div />} />
        <Route path="complete-list" element={<div />} />
        <Route path="cancellation-list" element={<div />} />
        <Route path="procedure-history" element={<div />} />
        <Route path="change-password" element={<div />} />
        <Route path="withdrawl" element={<div />} />
      </Route>

      <Route path={'feed'}>
        <Route index element={<FeedIndex />} />
        <Route path={'post'} element={<FeedPost />} />
        <Route path={'detail/:postNo'} element={<FeedDetail />} />
      </Route>

      <Route path="request">
        <Route index element={<Navigate to="/*" />} />
        <Route path=":postNo" element={<Request />} />
      </Route>
      <Route path="/oauth/kakao/redirect" element={<KakaoLoginSuccess />} />
    </Route>
  )
)
