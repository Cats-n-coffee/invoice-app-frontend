import { css } from 'styled-components';
import { Button1 } from '../../../styles/commonStyles';

export const TopSectionStyled = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2em;

    @media screen and (min-width: 900px) {
        padding: 3em 0;
    }
`;

export const TopSectionFunctions = css`
    display: flex;
    align-items: center;
`;

export const TopSectionText = css`
    h1 {
        font-size: 2rem;
        color: var(--primary-font);
    }

    p {
        font-size: 1.2rem;
        color: var(--secondary-font);
    }

    @media screen and (min-width: 500px) {
        h1 {
            font-size: 3rem;
            padding: 0 0 0 0;
        }
        
        p {
            font-size: 1.5rem;
        }
    }
`;

export const TopSectionFilters = css`
    position: relative;
    margin: 0 2em 0 0;

    .filters-button {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
            font-size: 1.2rem;
            padding: 0 .5em 0 0;
            color: var(--primary-font);
        }
    }

    form {
        display: none;
        position: absolute;
        top: 35px;
        left: -3em;
        flex-direction: column;
        padding: 2em;
        background: var(--background);
        box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
        border-radius: 5px;

        div {
            display: flex;

            &:first-child {
                margin: 0 0 1em 0;
            }

            label {
                margin: 0 0 0 1em;
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--primary-font);
            }
        }

        &.display {
            display: flex;
        }
    }
`;

export const NewInvoiceButton = css`
    ${Button1}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em .5em .5em;

    span {
        width: 32px;
        height: 32px;
        background: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1em 0 0;
    }

    @media screen and (min-width: 500px) {
        padding: .5em 1em .5em .5em;
    }
`;

export const BottomSectionStyled = css`
    padding: 0 2em;
    height: 100%;

    @media screen and (min-width: 900px) {
        padding: 0;
    }
`;

export const InvoiceListStyled = css`
    
`;

export const InvoiceItem = css`
    background: var(--boxes);
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    padding: 2em;
    border-radius: 8px;
    color: var(--secondary-font);
    
    .primary {
        color: var(--primary-font);
        font-weight: 700;
    }

    .secondary {
        color: var(--secondary-font);
    }

    &:not(:first-child) {
        margin: 1em 0 0 0;
    }

    @media screen and (min-width: 500px) {
        grid-template-columns: repeat(6, auto);
        grid-template-rows: auto;
    }
`;

export const InvoiceSummaryStyled = css`
    position: relative;
    height: 100%;
`;

export const NewInvoiceFormStyled = css`
    position: absolute;
`;