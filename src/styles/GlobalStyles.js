import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --c01: ${colors.c01};
        --c02: ${colors.c02};
        --c11: ${colors.c11};
        --c12: ${colors.c12};
        --c21: ${colors.c21};
        --c22: ${colors.c22};
        --c31: ${colors.c31};
        --c32: ${colors.c32};
        --c41: ${colors.c41};
        --c42: ${colors.c42};
        --c51: ${colors.c51};
        --c52: ${colors.c52};
        --c61: ${colors.c61};
        --c62: ${colors.c62};
        --c71: ${colors.c71};
        --c100: ${colors.c100};
        --c101: ${colors.c101};
        --font-family: 'Spartan', sans-serif;
    }

    html, body {
        font-family: var(--font-family);
        font-size: 10px;
        min-height: 100vh;
        width: 100%;
    }

    body[data-theme="light"] {
        --background: var(--c32);
        --boxes: var(--c22);
        --primary-font: var(--c41);
        --secondary-font: var(--c62);
        --sidebar: var(--c21);
        --purple: var(--c01);
        --purple-hover: var(--c02);
        --delete: var(--c11);
        --delete-hover: var(--c12);
        --status-yellow: var(--c100);
        --status-green: var(--c101);
        --button-3-hover: var(--c41);
        --button-4: var(--c71);
        --button-4-hover: var(--c52);
        --background-blur: rgba(0, 0, 0, 0.5);
        --form-background: var(--c22);
        --input-background: var(--c22);
        --input-border: var(--c62);
        --invoice-table: var(--c71);
        --invoice-total: var(--c21);
    }

    body[data-theme="dark"] {
        --background: var(--c31);
        --boxes: var(--c51);
        --primary-font: var(--c22);
        --secondary-font: var(--c52);
        --sidebar: var(--c51);
        --purple: var(--c01);
        --purple-hover: var(--c02);
        --delete: var(--c11);
        --delete-hover: var(--c12);
        --status-yellow: var(--c100);
        --status-green: var(--c101);
        --button-3-hover: var(--c21);
        --button-4: var(--c42);
        --button-4-hover: var(--c41);
        --background-blur: rgba(0, 0, 0, 0.5);
        --form-background: var(--c31);
        --input-background: var(--c51);
        --input-border: var(--c42);
        --invoice-table: var(--c42);
        --invoice-total: var(--c41);
    }

    #root {
        width: 100%;
        height: 100vh;
        background: var(--background);

        @media screen and (min-width: 900px) {
            overflow: hidden;
        }
    }
`;