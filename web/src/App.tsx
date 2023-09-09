import { RouterProvider } from 'react-router'
import { router } from './router'
import '@/assets/styles/index.scss'
import 'swiper/css'

function App() {
  return <RouterProvider router={router} />
}

export default App
