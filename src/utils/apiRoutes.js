import axios from './axios';

function userLogin(data) {
    return axios.post('/login', data)
    .then(res => res.data)
    .catch(err => err.response.data)
}

function userSignup(data) {
    return axios.post('/signup', data)
    .then(res => res.data)
    .catch(err => err.response.data)
}

function getInvoices(data) {
    return axios.get('/invoices', { params: { ...data } })
    .then(res => res.data)
    .catch(err => err.response.data)
}

function logoutUser() {
    return axios.post('/logout')
    .then(res => {
        return window.location.href = '/login'
    })
    .catch(err => err.response.data)
}
//{withCredentials: true, credentials: 'include'} --> for POST requests?
export {
    userLogin,
    userSignup,
    getInvoices,
    logoutUser
}