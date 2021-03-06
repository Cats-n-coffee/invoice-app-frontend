import axios from 'axios';
import { config } from '../config/config';
import history from 'history/browser';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.BASE_URL;

axios.interceptors.request.use((config) => ({
    ...config,
    withCredentials: true
} ))

axios.interceptors.response.use((res) => {
    console.log(res)
    return res;
}, (err) => {
    let errorMessage = "";
    try {
      errorMessage = err.response.data.msg;
    } catch (e) {}
    if (!err.response) {
      console.log("error 500");
      errorMessage = "Sorry there's a problem with the server";
    }
    if (err.response.status === 400) {
      errorMessage = "Invalid email or password";
    }
    if (err.response.status === 404) {
      errorMessage = "Something went wrong";
      localStorage.clear();
      history.push('/login');
    }
    if ([401, 403].includes(err.response.status)) {
      errorMessage = "Requesting resource that require authentication.";
      localStorage.clear();
      history.push('/login');
    }
    console.log('in axios.js ', errorMessage, err.response.data.message)
    return Promise.reject(err.response.data);
})

export default axios;