import { css } from 'styled-components';

export const AuthWrapper = css`
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, black, #fa0a92);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthSectionStyled = css`
    background: white;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em;

    h1 {
        font-size: 3rem;
        color: #fa0a92;
        font-weight: 700;
        letter-spacing: .1rem;
        padding: 0 0 .5em 0;
    }
`;

export const PortalWrapper = css`
    min-height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);

    @media screen and (min-width: 900px) {
        grid-template-columns: auto minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr); 
    }
`;

export const Sidebar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--sidebar);

    @media screen and (min-width: 900px) {
        flex-direction: column;
    }
`;

export const UtilsSidebar = css`
    display: flex;

    @media screen and (min-width: 900px) {
        flex-direction: column;
    }
`;

export const MainContainer = css`
    background: var(--background);
`;

export const MenuList = css`
    position: absolute;
    display: none;
    flex-direction: column;
    width: 60vw;
    padding: 2em;
    background: pink;
    margin: 4em 20vw 0 20vw;

    &.display {
        display: flex;
    }

    @media screen and (min-width: 900px) {
        position: static;
        display: flex;
        width: auto;
        padding: 0;
        background: none;
        margin: 0 0 0 0;
    }
`;

export const MenuSidebar = css`
    position: relative;
`;

export const LogoButton = css`
    background: var(--purple);
    border: none;
    cursor: pointer;

    @media screen and (min-width: 900px) {
        cursor: not-allowed;
        pointer-events: none;
    }
`;

export const ThemeButton = css`
    background: none;
    border: none;
`;