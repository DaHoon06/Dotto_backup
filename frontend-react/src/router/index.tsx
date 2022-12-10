import BoardPost from '@/pages/BoardPost'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import { Dotto } from '@/components/dotto'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="dotto">
        <Route path="board">
          <Route index element={<Dotto />} />
          <Route path="post" />
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
