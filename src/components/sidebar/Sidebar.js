// eslint-disable-next-line
import styled from 'styled-components/macro';
import { Link} from 'react-router-dom'
import { Sun, Moon, InvoiceIcon, Logo, ClientsIcon, DashIcon, UserIcon } from '../icons/assets/index';
import { Sidebar, MenuSidebar, LogoButton, MenuList, MenuItems, MenuIcons, UtilsSidebar, ThemeButton, LogoutButton } from './styles';
import { logoutUser } from '../../utils/apiRoutes';

export default function SideBar(props) {
    return (
        <div css={`${Sidebar}`}>
                    <div css={`${MenuSidebar}`}>
                        <button 
                            onClick={ props.openMobileMenu } 
                            css={`${LogoButton}`}
                            disabled={ window.innerWidth > 500 ? true : false }
                        >
                            <Logo 
                                css={` width: 28px; height: 26px; z-index: 3; `}
                            />
                        </button>
                        <ul className={ props.openMenu ? "display" : null } css={`${MenuList}`} >
                            <li css={`${MenuItems} 
                                    &::after { content: 'Dashboard'; } 
                                    @media screen and (min-width: 500px) {
                                        &::after {
                                            content: '';
                                            position: static;
                                            margin: 0 0 0 0;
                                        }
                                    }`}>
                                <Link to="/portal">
                                    <DashIcon css={`${MenuIcons}`}/>
                                </Link>
                            </li>
                            <li css={`${MenuItems} 
                                    &::after { content: 'Invoices'; } 
                                    @media screen and (min-width: 500px) {
                                        &::after {
                                            content: '';
                                            position: static;
                                            margin: 0 0 0 0;
                                        }
                                    }`}>
                                <Link to="/invoicesmain">
                                    <InvoiceIcon css={`${MenuIcons}`}/>
                                </Link>
                            </li>
                            <li css={`${MenuItems} 
                                    &::after { content: 'Clients'; } 
                                    @media screen and (min-width: 500px) {
                                        &::after {
                                            content: '';
                                            position: static;
                                            margin: 0 0 0 0;
                                        }
                                    }`}>
                                <Link to="/clientsmain">
                                    <ClientsIcon css={`${MenuIcons}`}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div css={`${UtilsSidebar}`} >
                        <button onClick={ props.toggleTheme } css={`${ThemeButton}`}>
                            { props.theme === props.THEME_MODE.light ? 
                                <Moon css={` width: 20px; height: 20px; `}/>
                                : <Sun css={` width: 20px; height: 20px; `}/>
                            }
                        </button>
                        <button 
                            onClick={ logoutUser }
                            css={`${LogoutButton}`}
                        >
                            Logout
                        </button>
                        <span><UserIcon css={`${MenuIcons}`}/></span>
                    </div>
                </div>
    )
}