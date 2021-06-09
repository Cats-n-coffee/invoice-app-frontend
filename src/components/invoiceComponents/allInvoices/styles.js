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
        font-size: 1.1rem;
        color: var(--secondary-font);
    }

    @media screen and (min-width: 500px) {
        h1 {
            font-size: 3rem;
            padding: 0 0 0 0;
        }
        
        p {
            font-size: 1.2rem;
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
    height: 80%;
    overflow-y: auto;
`;

export const InvoiceItem = css`
    background: var(--boxes);
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 45% 15% 40%;
    align-items: center;
    padding: 2em;
    border-radius: 8px;
    color: var(--secondary-font);
    
    .primary {
        color: var(--primary-font);
        font-weight: 700;
        font-size: 1.2rem;
    }

    .secondary {
        color: var(--secondary-font);
        font-size: 1.1rem;
    }

    .capitalize {
        text-transform: capitalize;
    }

    &:not(:first-child) {
        margin: 1em 0 0 0;
    }

    .invoice_id {
        grid-column: 1;
        grid-row: 1;
        align-self: baseline;
        padding: 0 0 1em 0;
    }

    .invoice_date {
        grid-column: 1;
        grid-row: 2;
        align-self: end;
    }

    .client_name {
        grid-column: 2;
        grid-row: 1;
        align-self: baseline;
        justify-self: right;
    }

    .invoice_amount {
        grid-column: 1;
        grid-row: 3;
        align-self: flex-end;
    }

    span:nth-of-type(5) {
        grid-column: 2;
        grid-row: 2 / -1;
        align-self: flex-end;
        justify-self: flex-end;
    }

    .invoice-arrow {
        display: none;
    }

    @media screen and (min-width: 500px) {
        grid-template-columns: 20% 20% 20% 20% 17% 3%;
        grid-template-rows: auto;

        .invoice_id {
            grid-column: 1;
            grid-row: 1;
            padding: 0;
            align-self: center;
        }

        .invoice_date {
            grid-column: 2;
            grid-row: 1;
            align-self: center;
        }

        .client_name {
            grid-column: 3;
            grid-row: 1;
            align-self: center;
            justify-self: left;
        }

        .invoice_amount {
            grid-column: 4;
            grid-row: 1;
            align-self: center;
        }

        span:nth-of-type(5) {
            grid-column: 5;
            grid-row: 1;
            align-self: center;
            justify-self: flex-end;
        }

        .invoice-arrow {
            display: block;
            grid-column: 6;
            grid-row: 1;
            justify-self: flex-end;
        }
    }
`;

export const InvoiceSummaryStyled = css`
    position: relative;
    height: 100%;
`;

export const NewInvoiceFormStyled = css`
    position: absolute;
`;