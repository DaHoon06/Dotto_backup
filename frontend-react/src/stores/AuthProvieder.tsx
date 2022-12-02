import { createContext, useContext } from 'react'

export interface IAuthContext {
  handleLogin?: () => Promise<void>
  handleLogout?: () => void
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if (authContext == null)
    throw new Error('No authContext.Provider found when calling authContext.')

  return authContext
}

export function AuthProvider({ children }: { children?: JSX.Element }) {
  const handleLogout = () => {}

  const handleLogin = async () => {}

  const value = {}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
