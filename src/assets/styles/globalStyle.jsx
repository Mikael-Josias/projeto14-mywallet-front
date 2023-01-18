import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
    }

    img, picture, svg, video{
        display: block;
        max-width: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        font: inherit;
    }

    body{
        background-color: #8C11BE;
        min-height: 100vh;
    }

    html{
        font-family: 'Raleway', sans-serif;
    }
`;

export default GlobalStyle;