import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { useAuth } from '../contexts/authProvider';
import { getInvoices, addNewInvoice, editInvoice, deleteInvoice } from '../utils/apiRoutes';
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
        .then(res => {
            console.log(res)
            setOneInvoice(null)
        })
        .catch(err => console.log('error at confirmdelete', err))
    }

    function sendNewInvoice(data) {
        console.log('in portal sending invoice', data)
        let invoiceObj = { user_email: user.email, invoice_data: { ...data, invoice_status: "pending" } }
        console.log('invoice object to send', invoiceObj)
        addNewInvoice(invoiceObj)
        .then(res => {
            setOneInvoice(res)
            console.log('after posting invoice', res)
            setOneInvoice(null)
        })
        .catch(err => console.log('after posting invoice err', err))
    }

    function editExistingInvoice(invoiceId, data) {
        console.log('in portal editing invoice', data)
        let invoiceObj = { invoice_id: invoiceId, user_email: user.email, invoice_data: { ...data } }
        console.log('sending this object to edit: ', invoiceObj)
        editInvoice(invoiceObj)
        .then(res => {
            console.log('after editing in portal', res)
            setOneInvoice(null)
        })
        .catch(err => console.log('after editing err', err))
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
    }, [user, oneInvoice])


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
                                setOneInvoice={ setOneInvoice }
                                sendNewInvoice={ sendNewInvoice }
                                editExistingInvoice={ editExistingInvoice }/> 
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