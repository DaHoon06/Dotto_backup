import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from '@/reportWebVitals'
import { CookiesProvider } from 'react-cookie'
import { AuthProvider } from './stores/AuthProvieder'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnMount: false, refetchOnWindowFocus: false },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
)
reportWebVitals()
