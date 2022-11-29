import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from '@/reportWebVitals'
import { RouterProvider } from 'react-router'
import { router } from '@/router'
import { CookiesProvider } from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
)
reportWebVitals()
