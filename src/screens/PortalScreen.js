import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { useAuth } from '../contexts/authProvider';
import { getInvoices, logoutUser } from '../utils/apiRoutes';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import InvoicesMainPage from '../components/invoiceComponents/InvoicesMainPage';
import ClientsMainPage from '../components/clientComponents/ClientsMainPage';
import Dashboard from '../components/dashboard/Dashboard';
import { PortalWrapper, Sidebar, UtilsSidebar, MainContainer, MenuList, MenuSidebar, LogoButton, ThemeButton} from './styles';
import { Moon, Sun, Logo } from '../components/icons/assets/index';

const THEME_MODE = {
    light: "light",
    dark: "dark"
}

export default function PortalScreen(props) {
    const { user } = useAuth()
    const [allInvoices, setAllInvoices] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [theme, setTheme] = React.useState(THEME_MODE.light)

    function openMobileMenu() {
        console.log('clicked')
        setOpenMenu(!openMenu)
    }

    function toggleTheme() {
        //theme === THEME_MODE.light ? setTheme(THEME_MODE.dark) : setTheme(THEME_MODE.light)
        if (theme === THEME_MODE.light) {
            setTheme(THEME_MODE.dark) 
            document.body.dataset.theme = THEME_MODE.dark;
        }
        else {
            setTheme(THEME_MODE.light)
            document.body.dataset.theme = THEME_MODE.light;
        }
        //document.body.dataset.theme = theme;
    }

    function handleLogout() {

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
                <div css={`${Sidebar}`}>
                    <div css={`${MenuSidebar}`}>
                        <button 
                            onClick={ openMobileMenu } 
                            css={`${LogoButton}`}
                            disabled={ window.innerWidth > 900 ? true : false }
                        >
                            <Logo 
                            css={` width: 28px; height: 26px; `}
                            />
                        </button>
                        <ul className={ openMenu ? "display" : null } css={`${MenuList}`} >
                            <li><Link to="/portal">Dashboard</Link></li>
                            <li><Link to="/invoicesmain">Invoices</Link></li>
                            <li><Link to="/clientsmain">Clients</Link></li>
                        </ul>
                    </div>
                    <div css={`${UtilsSidebar}`} >
                        <button onClick={ toggleTheme } css={`${ThemeButton}`}>
                            { theme === THEME_MODE.light ? 
                                <Moon css={` width: 20px; height: 20px; `}/>
                                : <Sun css={` width: 20px; height: 20px; `}/>
                            }
                        </button>
                        <button onClick={ logoutUser }>logout</button>
                        <span>IMG</span>
                    </div>
                </div>
                <main css={`${MainContainer}`} >  
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