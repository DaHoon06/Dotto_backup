import axios, { AxiosInstance } from 'axios';

//const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : 'https://back.ap.ngrok.io/api'
const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/api'

const instance :AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 20000
});

instance.interceptors.request.use(config  => {
    // if (Vue.$cookies) {
    //     const token = Vuex.getters.token;
    //         config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

instance.interceptors.response.use(response => {
    const { data } = response
    const { result } = data
    if(result) {
        console.log('AXIOS TRUE');
    }
    return response
}, error => {
    console.log('AXIOS ERROR')
    const { response } = error
    const { status } = response

    if (status === 401) {
        console.log('401 ERROR');
    } else {
        console.log('OTHER ERROR');
    }
    return response
});
export const ins = instance