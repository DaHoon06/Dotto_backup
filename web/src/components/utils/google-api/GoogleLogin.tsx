import React, { useEffect } from 'react'
import { gapi } from 'gapi-script'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from '@leecheuk/react-google-login'
import { ins as axios } from '@/lib/axios'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

interface GoogleLoginFailure {
  error: string
}

export const GoogleLoginButton = () => {
  useEffect(() => {
    gapi.load('client:auth2', googleInit)
  }, [])

  const googleInit = () => {
    gapi.client.init({
      clientId,
      scope: 'email',
    })
  }

  //TODO: OAuth 경로에 Token 만 보내기
  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): Promise<void> => {
    // 또는 tokenId
    const { googleId } = response as GoogleLoginResponse
    const headers = {
      Authorization: googleId,
    }
    const { data } = await axios.get('/sing-up/oauth/google', { headers })
    console.log(data)
  }
  const onFailure = (response: GoogleLoginFailure) => {
    console.log('실패', response)
  }
  return (
    <section className="login__items--wrapper mt-12">
      <GoogleLogin
        clientId={clientId || ''}
        buttonText={'구글 계정으로 로그인'}
        onSuccess={onSuccess}
        onFailure={onFailure}
        className="google__button"
      />
    </section>
  )
}
