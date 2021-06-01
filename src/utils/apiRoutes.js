import axios from './axios';

function userLogin(data) {
    return axios.post('/login', data)
    .then(res => res.data)
    .catch(err => err)
}

function userSignup(data) {
    return axios.post('/signup', data)
    .then(res => res.data)
    .catch(err => err)
}

function getInvoices(data) {
    return axios.get('/invoices', { params: { ...data } })
    .then(res => res.data)
    .catch(err => err)
}
//{withCredentials: true, credentials: 'include'} --> for POST requests?
export {
    userLogin,
    userSignup,
    getInvoices
}