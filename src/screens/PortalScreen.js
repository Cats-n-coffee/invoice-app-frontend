import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { useAuth } from '../contexts/authProvider';
import { getInvoices, deleteInvoice } from '../utils/apiRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvoicesMainPage from '../components/invoiceComponents/InvoicesMainPage';
import ClientsMainPage from '../components/clientComponents/ClientsMainPage';
import Dashboard from '../components/dashboard/Dashboard';
import { PortalWrapper, MainContainer } from './styles';
import Sidebar from '../components/sidebar/Sidebar';

const THEME_MODE = {
    light: "light",
    dark: "dark"
}

export default function PortalScreen(props) {
    const { user } = useAuth()
    const [allInvoices, setAllInvoices] = React.useState(null);
    const [oneInvoice, setOneInvoice] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [theme, setTheme] = React.useState(THEME_MODE.light);
    const [newOperation, setNewOperation] = React.useState(0);

    function openMobileMenu() {
        console.log('clicked')
        setOpenMenu(!openMenu)
    }

    function toggleTheme() {
        if (theme === THEME_MODE.light) {
            setTheme(THEME_MODE.dark) 
            document.body.dataset.theme = THEME_MODE.dark;
        }
        else {
            setTheme(THEME_MODE.light)
            document.body.dataset.theme = THEME_MODE.light;
        }
    }

    function confirmDelete(invoiceId) {
        console.log('deleting invoice ', invoiceId)
        deleteInvoice({ data: { invoice_id: invoiceId } })
        .then(res => console.log(res))
        .then(err => console.log('error at confirmdelete', err))
        setNewOperation(newOperation +1)
    }

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
        <div css={`${PortalWrapper}`} >
            <Router>
                <Sidebar 
                    openMobileMenu={ openMobileMenu } 
                    openMenu={ openMenu } 
                    toggleTheme={ toggleTheme } 
                    THEME_MODE={ THEME_MODE } 
                    theme={ theme } 
                />
                <main css={`${MainContainer}`} >  
                    <Switch>
                        <Route 
                            path="/invoicesmain" 
                            component={ () => <InvoicesMainPage 
                                allInvoices={ allInvoices } 
                                setAllInvoices={ setAllInvoices }
                                confirmDelete={ confirmDelete }
                                oneInvoice={ oneInvoice }
                                setOneInvoice={ setOneInvoice }/> 
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