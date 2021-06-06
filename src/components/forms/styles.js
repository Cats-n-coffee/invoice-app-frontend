import { css } from 'styled-components';

// ----------------------------------- AUTH FORM -------------------------------
export const AuthFormStyled = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .auth-form-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1em 0;

        label {
            font-size: 1.5rem;
            padding: 0 0 .5em 0;
        }

        input {
            background: #e3e3e3;
            border: none;
            padding: .5em;
            font-size: 1.2rem;
            border-radius: 5px;
        }

        input:focus {
            outline: 1px solid #fc5da0;
        }
    }

    .error {
        width: 100%;
        background: rgba(252, 30, 30, 0.3);
        border: 1px solid #fc1e1e;
        border-radius: 10px;
        font-size: 1.2rem;
        padding: 1em;
        text-align: center;
    }

    button {
        display: inline-block;
        width: 100%;
        margin: 1em 0 0 0;
        padding: .7em;
        font-size: 1.7rem;
        letter-spacing: .1rem;
        background: #fa0a92;
        color: white;
        border: 1px solid #ed0270;
        border-radius: 10px;
        text-transform: uppercase;
    }

    button:hover {
        opacity: 0.6;
    }

    p {
        margin: 1.5em 0 0 0;
        font-size: 1.2rem;
    }
`;

// ------------------------------------ INVOICE FORM -----------------------------
export const FormWrapperBlur = css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background-blur);
    z-index: 2;
`;

export const FormContainer = css`
    height: 100%;
    width: 100%;
    background: var(--form-background);
    padding: 2em 1.5em;
    overflow-y: scroll;

    h2 {
        font-size: 2.1rem;
        font-weight: 700;
        color: var(--primary-font);
        text-transform: capitalize;
        padding: 0 0 1em 0;
    }

    @media screen and (min-width: 500px) {
        width: 75%;
        padding: 3em;
    }

    @media screen and (min-width: 900px) {
        width: 50%;
    }
  
`;

export const FormElement = css`

`;

export const FormElementBillFrom = css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, auto);

    .biller-street {
        grid-column: 1 / -1;
        grid-row: 2;
    }

    .biller-city {
        grid-column: 1 / 2;
        grid-row: 3;
    }

    .biller-zip {
        grid-column: 2 / -1;
        grid-row: 3;
    }

    .biller-country {
        grid-column: 1 / -1;
        grid-row: -1;
    }

    @media screen and (min-width: 500px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(3, auto);

        .biller-street {
            grid-column: 1 / -1;
            grid-row: 2;
        }

        .biller-city {
            grid-column: 1 / 2;
            grid-row: -1;
        }

        .biller-zip {
            grid-column: 2 / -3;
            grid-row: -1;
        }

        .biller-country {
            grid-column: 3 / -1;
            grid-row: -1;
        }
    }
`;

export const FormElementBillTo = css`
   display: grid;
   grid-template-rows: repeat(9, auto);
   grid-template-columns: repeat(2, minmax(0, 1fr));

   .client-name {
        grid-column: 1 / -1;
        grid-row: 2;
   }

   .client-email {
        grid-column: 1 / -1;
        grid-row: 3;
   }

   .client-street {
        grid-column: 1 / -1;
        grid-row: 4;
   }

   .client-city {
        grid-column: 1 / 2;
        grid-row: 5;
   }

   .client-zip {
        grid-column: 2 / -1;
        grid-row: 5;
   }

   .client-country {
        grid-column: 1 / -1;
        grid-row: 6;
   }

   .invoice-date {
        grid-column: 1/ -1;
        grid-row: 7;
   }

   .payment-terms {
        grid-column: 1 / -1;
        grid-row: 8;
   }

   .project-description {
        grid-column: 1 / -1;
        grid-row: 9;
   }

   @media screen and (min-width: 500px) {
       grid-template-columns: repeat(3, minmax(0, 1fr));
       grid-template-rows: repeat(7, auto);

       .client-name {
            grid-column: 1 / -1;
            grid-row: 2;
        }

        .client-email {
            grid-column: 1 / -1;
            grid-row: 3;
        }

        .client-street {
            grid-column: 1 / -1;
            grid-row: 4;
        }

        .client-city {
            grid-column: 1 / 2;
            grid-row: 5;
        }

        .client-zip {
            grid-column: 2 / 3;
            grid-row: 5;
        }

        .client-country {
            grid-column: 3 / -1;
            grid-row: 5;
        }

        .invoice-date {
            grid-column: 1/ 2;
            grid-row: 6;
        }

        .payment-terms {
            grid-column: 2 / -1;
            grid-row: 6;
        }

        .project-description {
            grid-column: 1 / -1;
            grid-row: 7;
        }
   }
`;

export const FormElementItemList = css`

`;

export const FormElementButtons = css`

`;

export const FormFieldset = css`
    border: none;

    h3 {
        color: var(--purple);
        font-weight: 700;
        font-size: 1.2rem;
        padding: .5em 0;
    }
`;

export const FormFieldContainer = css`
    display: flex;
    flex-direction: column;
    padding: .5em 0;
    min-width: 0;
    flex: 1;

    label {
        color: var(--secondary-font);
        padding: 0 0 .4em 0;
    }

    input, select {
        background: var(--input-background);
        border: 1px solid var(--input-border);
        border-radius: 4px;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--primary-font);
        padding: .4em;

        &:focus {
            outline: 1px solid var(--purple);
            border: 1px solid var(--input-background);
        }
    }
`;