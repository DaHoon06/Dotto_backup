import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from '@/reportWebVitals'
import { RouterProvider } from 'react-router'
import { router } from '@/router'
import { CookiesProvider } from 'react-cookie'
import { AuthProvider } from './stores/AuthProvieder'
import '@/assets/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
)
reportWebVitals()
