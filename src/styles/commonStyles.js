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
    background: none;
    color: var(--primary-font);
    border: none;
    font-weight: 700;
`;