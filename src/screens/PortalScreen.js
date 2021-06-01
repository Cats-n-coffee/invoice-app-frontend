import React from 'react';
import { useAuth } from '../contexts/authProvider';
import { getInvoices } from '../utils/apiRoutes';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import InvoicesMainPage from '../components/invoiceComponents/InvoicesMainPage';
import ClientsMainPage from '../components/clientComponents/ClientsMainPage';

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
        <div>
            <h2>Main menu</h2>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/invoicesmain">Invoices</Link></li>
                        <li><Link to="/clientsmain">Clients</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/invoicesmain" component={ InvoicesMainPage }/>
                    <Route path="/clientsmain" component={ ClientsMainPage } /> 
                </Switch>
            </Router>
        </div>
    )
}