import axios from './axios';

function userLogin(data) {
    return axios.post('/login', data)
    .then(res => {
        if (res.error) {
            throw new Error(res.message || "Email or password incorrect")
        }
        else {
            return res.data
        }
    })
    .catch(err => {
        console.log('login request err: ', err)
        return err;
    })
}

function userSignup(data) {
    return axios.post('/signup', data)
    .then(res => res.data)
    .catch(err => err)
}

function logoutUser() {
    return axios.post('/logout')
    .then(res => {
        return window.location.href = '/login'
    })
    .catch(err => err)
}

function getInvoices(data) {
    return axios.get('/invoices', { params: { ...data } })
    .then(res => res.data)
    .catch(err => {
        console.log('get request err: ', err)
        return err
    })
}

function addNewInvoice(data) {
    return axios.post('/newinvoice', data)
    .then(res => res.data)
    .catch(err => err)
}

function editInvoice(data) {
    return axios.put('/editinvoice', data)
    .then(res => res.data)
    .catch(err => err)
}

function deleteInvoice(data) {
    console.log('delete invoice', data)
    return axios.delete('/deleteinvoice', data)
    .then(res => res.data)
    .catch(err => err)
}

export {
    userLogin,
    userSignup,
    getInvoices,
    logoutUser,
    addNewInvoice,
    editInvoice,
    deleteInvoice
}