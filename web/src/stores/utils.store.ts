import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface UtilsStoreState {
  oauthLogin: boolean
}

const useUtilStore = create(
  devtools((set) => ({
    oauthLogin: false,
    setOauthLogin: (payload: boolean) => set(() => ({ oauthLogin: payload })),
  }))
)

export default useUtilStore
