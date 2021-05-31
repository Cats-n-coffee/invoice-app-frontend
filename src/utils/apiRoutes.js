import axios from './axios';

function userLogin(data) {
    return axios.post('/login', data)
    .then(res => {
        console.log('axios',res)
    })
    .catch(err => console.log(err))
}

function userSignup(data) {
    return axios.post('/login', data)
    .then(res => res.data)
    .catch(err => err)
}

export {
    userLogin,
    userSignup
}