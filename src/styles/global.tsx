import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        background-color: var(--clr-dark-100)
    }
:root{
    --fs-100: 1rem;
    --fs-200: 1.25rem;
    --fs-300: 1.563rem;
    --fs-400: 1.953rem;
    --fs-500: 2.441rem;
    --fs-600: 3.052rem;
    --fs-700: 3.815rem;
    --fs-800: 4.768rem;
    
    --clr-dark-100: #000000;
    --clr-dark-200: #0F0F33;
    --clr-dark-300: #000052;
    --clr-dark-400: #181852;
    --clr-dark-500: #00009E;

    --clr-light-100: #FFFFFF;
    --clr-light-100: #D4D4D4;
    --clr-light-100: #A6B9DB;
}

a{
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
button{
    cursor: pointer;
    border: none;
}
`;
