import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
        height: 100vh;
        width: 100%;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;