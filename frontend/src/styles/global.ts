import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
    }

    body {
        background: #000000;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 1.6rem 'Nunito', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: bold;
    }

    ul, li {
        list-style: none;
    }

    button {
        background: none;
        border: unset;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
