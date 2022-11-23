import App from '@/App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dotto">
        <Route path="board">
          <Route index />
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
