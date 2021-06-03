import React from 'react';
// eslint-disable-next-line
import styled from 'styled-components/macro';
import { useAuth } from '../contexts/authProvider';
import { getInvoices } from '../utils/apiRoutes';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import InvoicesMainPage from '../components/invoiceComponents/InvoicesMainPage';
import ClientsMainPage from '../components/clientComponents/ClientsMainPage';
import Dashboard from '../components/dashboard/Dashboard';
import { PortalWrapper } from './styles';

export default function PortalScreen(props) {
    const { user } = useAuth()
    const [allInvoices, setAllInvoices] = React.useState(null);

    React.useEffect(() => {
        getInvoices(user)
        .then(data => {
            console.log('data', data)
            if (data.error) {
                throw new Error(data.message || 'No Invoices')
            }
            else {
                setAllInvoices(data)
            }
        })
        .catch(err => console.log('portal screen', err))
    }, [user])

    return (
        <div
            css={`${PortalWrapper}`}
        >
            <Router>
                <div>
                    <ul>
                        <li><Link to="/portal">Dashboard</Link></li>
                        <li><Link to="/invoicesmain">Invoices</Link></li>
                        <li><Link to="/clientsmain">Clients</Link></li>
                    </ul>
                </div>
                <main>  
                    <Switch>
                        <Route 
                            path="/invoicesmain" 
                            component={ () => <InvoicesMainPage 
                                allInvoices={ allInvoices } 
                                setAllInvoices={ setAllInvoices }/> 
                            }
                        />
                        <Route path="/clientsmain" component={ () => <ClientsMainPage /> } />
                        <Route exact path="/portal" component={ () => <Dashboard /> } />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}