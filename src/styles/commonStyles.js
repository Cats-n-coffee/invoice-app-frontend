import { css } from 'styled-components';

export const Button1 = css`
    background: var(--purple);
    color: white;
    border-radius: 25px;
    padding: .7em 1.2em;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;

    &:hover {
        background: var(--purple-hover);
    }
`;

export const Button2 = css`
    background: var(--delete);
    color: white;
    border-radius: 25px;
    padding: .7em 1.2em;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;

    &:hover {
        background: var(--delete-hover);
    }
`;

export const Button3 = css`
    background: var(--sidebar);
    color: var(--secondary-font);
    border-radius: 25px;
    padding: .7em 1.2em;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;

    &:hover {
        background: var(--button-3-hover);
    }
`;

export const Button4 = css`
    background: var(--button-4);
    color: var(--secondary-font);
    border-radius: 25px;
    padding: .7em 1.2em;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;

    &:hover {
        background: var(--button-4-hover);
    }
`;