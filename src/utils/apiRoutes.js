import { useMutation, useQueryClient } from 'react-query';
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
    return axios.get('/logout')
    .then(res => {
        localStorage.clear();
        window.location.href = '/login';
        return;
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

function useAddNewInvoice() {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((data) => axios.post('/newinvoice', data), 
    {
        onSuccess: () => {
            queryClient.invalidateQueries('allInvoices')
        }
    }
    )
    return mutate;
}

function useEditInvoice() {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((data) => axios.put('/editinvoice', data),
    {
        onSuccess: () => {
            queryClient.invalidateQueries('allInvoices')
        }
    }
    );
    return mutate;
}

function useDeleteInvoice() {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((data) => axios.delete('/deleteinvoice', data),
    {
        onSuccess: () => {
            queryClient.invalidateQueries('allInvoices')
        }
    }
    );
    return mutate;
}

export {
    userLogin,
    userSignup,
    getInvoices,
    logoutUser,
    useAddNewInvoice,
    useEditInvoice,
    useDeleteInvoice
}