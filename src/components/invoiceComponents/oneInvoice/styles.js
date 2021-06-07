import { css } from 'styled-components';

export const InvoiceWrapperModified = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 1em;
    height: 100%;

    @media screen and (min-width: 900px) {
        justify-content: center;
    }
`;

export const InvoiceStyled = css`
    width: 100%;
`;

export const InvoiceTopPanel = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: var(--boxes);
    padding: 2em 2em;
    border-radius: 8px;
    margin: 0 0 1em 0;

    .status-panel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        width: 100%;
        color: var(--secondary-font);
    }

    .actions-panel {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background: var(--boxes);
        padding: 2em;
    }

    @media screen and (min-width: 500px) {
        padding: 2em 3em;

        .status-panel {
            width: 50%;
            justify-content: left;
            gap: 1.5em;
        }

        .actions-panel {
            position: static;
            width: 50%;
            padding: 0;
            justify-content: right;
            gap: 1em;
        }
        
    }
`;

export const InvoiceDetails = css`
    display: flex;
    flex-direction: column;
    background: var(--boxes);
    border-radius: 8px;
    padding: 2em;

    .primary {
        color: var(--primary-font);
        font-weight: 700;
        font-size: 1.2rem;
    }

    .secondary {
        color: var(--secondary-font);
        font-size: 1.1rem;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .label {
        padding: 0 0 1em 0;
    }

    .capitalize {
        text-transform: capitalize;
    }

    .invoice-details-top-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: repeat(3, auto);

        .biller-address {
            padding: 2em 0 0 0;
            display: flex;
            flex-direction: column;
        }

    }

    .invoice-details-middle-row {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(3, auto);
        padding: 3em 0;

        .invoice-date {
            grid-column: 1;
            grid-row: 1;
        }

        .invoice-due {
            grid-column: 1;
            grid-row: 2;
        }

        .invoice-bill-to {
            grid-column: 2;
            grid-row: 1 / 2;
        }

        .invoice-email {
            grid-column: 1 / -1;
            grid-row: 3;
            padding: 2em 0 0 0;
        }
    }

    .item-list {

    }

    @media screen and (min-width: 500px) {
        padding: 2em 3em;

        .invoice-details-top-row {
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: repeat(2, auto);

            h1 {
                grid-column: 1;
                grid-row: 1;
            }

            .invoice-description {
                grid-column: 1;
                grid-row: 2;
            }

            .biller-address {
                grid-column: 2;
                grid-row: 1 / -1;
                justify-self: right;
                align-self: start;
                padding: 0;
                align-items: flex-end;
            }
        }

        .invoice-details-middle-row {
            grid-template-columns: 30% 30% 40%;
            grid-template-rows: repeat(2, auto);

            .invoice-date {
                grid-column: 1;
                grid-row: 1;
            }

            .invoice-due {
                grid-column: 1;
                grid-row: 2;
                padding: 2em 0 0 0;
            }

            .invoice-bill-to {
                grid-column: 2;
                grid-row: 1 / -1;
            }

            .invoice-email {
                grid-column: 3;
                grid-row: 1;
                padding: 0;
            }
        }

        .item-list {

        }
    }
`;

