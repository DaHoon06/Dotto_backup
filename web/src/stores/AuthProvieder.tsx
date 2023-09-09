import { createContext, useContext, useState } from 'react'

export interface IAuthContext {
  isLogin: boolean
  userInfo: IUserProp
  setUserInfo: (data: IUserProp) => void
  setLoggedIn: () => void
}

export interface IUserProp {
  nickname: string
  accessToken: string
  refreshToken: string
  roles: string
}

const setUserInitialData = {
  nickname: '',
  accessToken: '',
  refreshToken: '',
  roles: '',
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if (authContext == null)
    throw new Error('No authContext.Provider found when calling authContext.')

  return authContext
}

export function AuthProvider({ children }: { children?: JSX.Element }) {
  const setUserInfo = (data: IUserProp) => {
    setState((prevState) => ({
      ...prevState,
      userInfo: data,
    }))
  }

  const setLoggedIn = () => {
    setState((prevState) => ({
      ...prevState,
      isLogin: !prevState.isLogin,
    }))
  }

  const initialSate = {
    userInfo: setUserInitialData,
    isLogin: false,
    setUserInfo,
    setLoggedIn,
  }

  const [state, setState] = useState(initialSate)

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
