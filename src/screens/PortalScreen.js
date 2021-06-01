import React from 'react';
import { useAuth } from '../contexts/authProvider';
import { getInvoices } from '../utils/apiRoutes';

export default function PortalScreen(props) {
    const { user } = useAuth()

    console.log(user)
    React.useEffect(() => {
      
        getInvoices(user)
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log('portal screen', err))
    })

    return (
        <div>portal</div>
    )
}