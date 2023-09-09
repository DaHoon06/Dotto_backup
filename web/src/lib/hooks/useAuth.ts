import { useAuthContext } from '@/stores/AuthProvieder'

export const useAuth = () => {
  const {} = useAuthContext()

  const isLogin = true

  return {
    isLogin,
  }
}
