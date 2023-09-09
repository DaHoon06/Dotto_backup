import { useEffect } from 'react'
import { ins as axios } from '@/lib/axios'
import { Spinner } from '@/components/common/spinner/Spinner'
import useUtilStore from '@/stores/utils.store'

export const KakaoLoginSuccess = () => {
  const { oauthLogin, setOauthLogin } = useUtilStore((state: any) => state)
  const url = new URL(window.location.href)
  const params = url.searchParams
  const code = params.get('code')

  useEffect(() => {
    oauthApi()
  }, [])

  const oauthApi = async () => {
    const headers = {
      Authorization: code,
    }
    setOauthLogin(true)
    console.log(oauthLogin)
    const { data } = await axios.get(`/sign-up/oauth/kakao`, {
      headers,
    })
    window.close()
    // return data
  }

  // const { mutate } = useMutation(oauthApi, {
  //   onSuccess: (data: any) => {
  //     setOauthLogin()
  //     console.log(oauthLogin, '로그인 성공?')
  //     //window.close()
  //   },
  //   onError: () => {},
  //   onSettled: () => {},
  // })

  return (
    <>
      <Spinner />
    </>
  )
}
