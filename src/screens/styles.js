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