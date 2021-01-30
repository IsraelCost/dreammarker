import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --font-family: 'Poppins', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        list-style-type: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html,
    body,
    input,
    textarea,
    select,
    button {
        font-family: var(--font-family);
        border: none;
        outline: none;
    }
`;