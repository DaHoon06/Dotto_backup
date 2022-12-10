import axios, { AxiosInstance } from 'axios'

//const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : 'https://back.ap.ngrok.io/api'
const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/api'

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

instance.interceptors.request.use((config) => {
  //const token = localStorage.getItem('accessToken') ?? ''
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
    return response
  }
)
export const ins = instance
