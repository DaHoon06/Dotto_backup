import App from '@/App'
import BoardPost from '@/pages/BoardPost'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import '@/assets/styles/index.scss'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="dotto">
        <Route path="board">
          <Route index />
          <Route path="post" element={<BoardPost />} />
          <Route path="view/:postNo" />
        </Route>

        <Route path="feed">
          <Route index />
          <Route path="post" />
        </Route>
      </Route>

      <Route path="estimate/:postNo" />
      <Route path="search/result/:keyword" />
      <Route path="my" />
      <Route path="401" />
      <Route path="*" />
    </Route>
  )
)
