import React from 'react';
import styled from 'styled-components/macro';
import { useAuth } from '../contexts/authProvider';
import { getInvoices } from '../utils/apiRoutes';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import InvoicesMainPage from '../components/invoiceComponents/InvoicesMainPage';
import ClientsMainPage from '../components/clientComponents/ClientsMainPage';
import { PortalWrapper } from './styles';

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
        <div
            css={`${PortalWrapper}`}
        >
            <Router>
                <div>
                    <ul>
                        <li><Link to="/invoicesmain">Invoices</Link></li>
                        <li><Link to="/clientsmain">Clients</Link></li>
                    </ul>
                </div>
                <main>  
                    <Switch>
                        <Route path="/invoicesmain" component={ InvoicesMainPage }/>
                        <Route path="/clientsmain" component={ ClientsMainPage } /> 
                    </Switch>
                </main>
            </Router>
        </div>
    )
}