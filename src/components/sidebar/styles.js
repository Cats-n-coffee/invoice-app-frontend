import { css } from 'styled-components';

// ------------------------------------ SIDEBAR -------------------------------------
export const Sidebar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--sidebar);
    min-height: 50px;
    min-width: 70px;

    @media screen and (min-width: 900px) {
        flex-direction: column;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

export const UtilsSidebar = css`
    display: flex;
    padding: 0 1em 0 0;
    align-items: center;

    @media screen and (min-width: 900px) {
        flex-direction: column;
        padding: 0 0 2em 0;
    }
`;

export const MenuList = css`
    position: absolute;
    display: none;
    flex-direction: column;
    width: 60vw;
    padding: 2em;
    background: var(--sidebar);
    margin: 7em 20vw 0 20vw;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.display {
        display: flex;
        z-index: 12;
    }

    @media screen and (min-width: 500px) {
        position: static;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 0 2em;
        background: none;
        margin: 0 0 0 0;
    }

    @media screen and (min-width: 900px) {
        flex-direction: column;
        padding: 2em 0;
    }
`;

export const MenuSidebar = css`
    position: relative;
    display: flex;
   
    @media screen and (min-width: 900px) {
        flex-direction: column;
        width: 100%;
    }    
`;

export const MenuItems = css`
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
    }

    a:hover {
        span {
            color: var(--purple);
        }
    }

    span {
        color: var(--secondary-font);
        margin: 0 0 0 1em;
        font-size: 1.5rem;
    }

    &:not(:first-child) {
        margin: 1em 0 0 0;
    }


    @media screen and (min-width: 500px) {
        span {
            display: none;
        }

        &:not(:first-child) {
            margin: 0 0 0 1.5em;
        }
    }

    @media screen and (min-width: 900px) {
        justify-content: center;

        &:not(:first-child) {
            margin: 1.5em 0 0 0;
        }
    }
`;

export const MenuIcons = css`
    width: 20px;
    height: 20px;
    
    path {
        fill: var(--secondary-font);
        transition: all 500ms ease-in-out;

        &:hover {
            fill: var(--purple);
        }
    }
`;

export const LogoButton = css`
    position: relative;
    display: inline-block;
    width: 100%;
    height: auto;
    min-height: 60px;
    min-width: 60px;
    background: var(--purple);
    border: none;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: var(--purple-hover);
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        z-index: -1;
    }

    @media screen and (min-width: 900px) {
        cursor: not-allowed;
        pointer-events: none;
    }
`;

export const ThemeButton = css`
    background: none;
    border: none;
    cursor: pointer;
`;

export const LogoutButton = css`
    margin: 0 1em;
    color: var(--purple);
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        color: var(--purple-hover);
        text-decoration: underline;
    }

    @media screen and (min-width: 900px) {
        margin: 2em 0;
    }
`;