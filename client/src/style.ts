import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        padding: 0;
    }

    body {
        height: 100wh;
        width: 100%;
        padding: 0;
        margin: 0;
        background-color: #1a1a1a;
        /* background-image: url('background.jpg'); */
        background-size: cover;
    }

    a, span, h1, h2, h3, h4, label, input, button {
        color: #ccc;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    nav {
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        li {
            list-style-type: none;
            a {
                text-decoration: none;
            }
        }
    }

    svg {
        height: 30px !important;
        width: 30px !important;
        color: #ccc; 
        cursor: pointer;
    }

    .fade-enter {
        opacity: 0;
        transition: 300ms ease-in-out;
    }
    .fade-enter-active {
        opacity: 1;
        transition: 300ms ease-in-out;
    }
    .fade-exit {
        opacity: 1;
        transition: 300ms ease-in-out;
    }
    .fade-exit-active {
        opacity: 0;
        transition: 300ms ease-in-out;
    }
`;

export default GlobalStyle;