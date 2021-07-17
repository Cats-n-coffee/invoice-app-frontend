import { css } from 'styled-components';

export const DashboardStyled = css`
    width: 100%;
    height: 100%;
    padding: 1em 2em;

    @media screen and (min-width: 500px) {
        padding: 2em 3em;
    }

    @media screen and (min-width: 900px) {
        padding: 3em;
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export const WelcomeStyled = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 2em;
    background: var(--boxes);
    border-radius: 8px;
    text-align: right;

    .welcome-name {
        padding: 0 0 1em;
        font-size: 2rem;
        font-weight: 700;
    }

    .welcome-date {
        font-size: 1.5rem;
    }
    
    @media screen and (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        padding: 2em 4em;
        .welcome-name {
            padding: 0;
        }
    }
`;
