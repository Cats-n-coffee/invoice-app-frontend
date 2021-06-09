// eslint-disable-next-line
import styled from 'styled-components/macro';
import { Link} from 'react-router-dom'
import { Sun, Moon, InvoiceIcon, Logo, ClientsIcon, DashIcon, UserIcon } from '../icons/assets/index';
import { Sidebar, MenuSidebar, LogoButton, MenuList, MenuItems, MenuIcons, UtilsSidebar, ThemeButton, LogoutButton } from './styles';
import { logoutUser } from '../../utils/apiRoutes';

export default function SideBar(props) {
    return (
        <nav css={`${Sidebar}`}>
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
                    <li css={`${MenuItems}`}>
                        <Link to="/portal">
                            <DashIcon css={`${MenuIcons}`}/>
                            <span onClick={ () => props.openMobileMenu(!props.openMenu) }>Dashboard</span>
                        </Link>
                    </li>
                    <li css={`${MenuItems}`}>
                        <Link to="/invoicesmain" aria-label="go-to-invoice">
                            <InvoiceIcon css={`${MenuIcons}`}/>
                            <span onClick={ () => props.openMobileMenu(!props.openMenu) }>Invoices</span>
                        </Link>
                    </li>
                    <li css={`${MenuItems}`}>
                        <Link to="/clientsmain" aria-label="go-to-clients">
                            <ClientsIcon css={`${MenuIcons}`}/>
                            <span onClick={ () => props.openMobileMenu(!props.openMenu) }>Clients</span>
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
        </nav>
    )
}