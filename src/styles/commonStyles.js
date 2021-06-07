import { css } from 'styled-components';

export const Button = css`
    border-radius: 25px;
    padding: 1em;
    font-size: 1rem;
    font-weight: 700;
    border: none;

    @media screen and (min-width: 500px) {
        padding: 1.2em 1.4em;
        font-size: 1.1rem;
    }
`;

export const Button1 = css`
    ${Button}
    background: var(--purple);
    color: white;

    &:hover {
        background: var(--purple-hover);
    }
`;

export const Button2 = css`
    ${Button}
    background: var(--delete);
    color: white;

    &:hover {
        background: var(--delete-hover);
    }
`;

export const Button3 = css`
    ${Button}
    background: var(--sidebar);
    color: var(--secondary-font);

    &:hover {
        background: var(--button-3-hover);
    }
`;

export const Button4 = css`
    ${Button}
    background: var(--button-4);
    color: var(--secondary-font);

    &:hover {
        background: var(--button-4-hover);
    }
`;

export const GoBackButton = css`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin: 1em 0;

    span{
        color: var(--primary-font);
        font-weight: 700;
        margin: 0 0 0 1em;
    }

    @media screen and (min-width: 500px) {
        margin: 2em 0;
    }
   
`;

export const StatusStyled = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 104px;
    height: 40px;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 4px;
    text-transform: capitalize;

    .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 .7em 0 0;
    }

    &.pending {
        background: rgba(255, 143, 0, 0.2);
        color: var(--status-yellow);

        .dot {
            background: var(--status-yellow);
        }
    }

    &.paid {
        background: rgba(51, 214, 159, 0.2);
        color: var(--status-green);

        .dot {
            background: var(--status-green);
        } 
    }

    &.draft {
        background: rgba(0, 0, 0, 0.2);
        color: var(--primary-font);

        .dot {
            background: var(--primary-font);
        }
    }
`;