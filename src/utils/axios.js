import axios from 'axios';
import { config } from '../config/config';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.BASE_URL;

axios.interceptors.request.use((config) => {
    config.headers = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    console.log('headers')
    return config;
}, (err) => {
    return Promise.reject(err)
})

axios.interceptors.response.use((res) => {
    console.log(res)
    return res;
}, (err) => {
    return Promise.reject(err)
})

export default axios;