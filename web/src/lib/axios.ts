import axios, { AxiosInstance } from 'axios'

const baseURL =
  process.env.REACT_APP_PRODUCT === 'product'
    ? 'https://api.dotto.site/api'
    : '/api'

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

instance.interceptors.request.use((config) => {
  const token = window.sessionStorage.getItem('accessToken') ?? ''
  if (token.length) {
    config.headers!.Authorization = `Bearer ${token}`
    return config
  }
  return config
})

instance.interceptors.response.use(
  (response) => {
    // const { data } = response
    // const { result } = data
    return response
  },
  (error) => {
    const { response } = error
    const { status } = response

    if (status === 401) {
      console.log('401 ERROR')
    } else {
      console.log('OTHER ERROR')
    }
    console.log(response)
    return response
  }
)
export const ins = instance
