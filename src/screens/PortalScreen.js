import React from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { useAuth } from '../contexts/authProvider';
import { getInvoices } from '../utils/apiRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvoicesMainPage from '../components/invoiceComponents/InvoicesMainPage';
import Dashboard from '../components/dashboard/Dashboard';
import { PortalWrapper, MainContainer } from './styles';
import Sidebar from '../components/sidebar/Sidebar';

const THEME_MODE = {
    light: "light",
    dark: "dark"
}

export default function PortalScreen(props) {
    const { user } = useAuth()
    //const [allInvoices, setAllInvoices] = React.useState(null);
    const [oneInvoice, setOneInvoice] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [theme, setTheme] = React.useState(THEME_MODE.light);

    const { data: allInvoices, error, isError, isLoading } = useQuery(["allInvoices", user], () => getInvoices(user))

    function openMobileMenu(){ 
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

    if (error) return console.log('error while fetching data: ', error);

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
                    { isLoading && <h3>Loading ...</h3> } 
                    { isError && <h3>Something went wrong!</h3> } 
                    <Switch>
                        <Route 
                            path="/invoicesmain" 
                            component={ () => <InvoicesMainPage 
                                allInvoices={ allInvoices??[] } 
                                // setAllInvoices={ setAllInvoices }
                                oneInvoice={ oneInvoice }
                                setOneInvoice={ setOneInvoice }
                                /> 
                            }
                        />
                        <Route exact path="/portal" component={ () => <Dashboard allInvoices={ allInvoices??[] }/> } />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}