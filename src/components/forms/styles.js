import styled, { css } from 'styled-components';

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