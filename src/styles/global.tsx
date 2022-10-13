import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        background-color: var(--clr-background-primary);
        color: var(--clr-light-100);
    }
:root{
    --border-thin: 0.07rem;
    --border-regular: 0.125rem;
    --border-large: 0.2rem;

    --fs-100: 1rem;
    --fs-200: 1.25rem;
    --fs-300: 1.563rem;
    --fs-400: 1.953rem;
    --fs-500: 2.441rem;
    --fs-600: 3.052rem;
    --fs-700: 3.815rem;
    --fs-800: 4.768rem;
    
    --clr-dark-400: #0F0F33;
    --clr-dark-500: #000000;

    --clr-light-100: #FFFFFF;
    --clr-light-200: #D4D4D4;
    --clr-light-300: #A6B9DB;

    --clr-dark-100: #7E95DE;
    --clr-dark-200: #201DAD;
    --clr-dark-300: #314775;

    --clr-background-secondary: #0A0F29;
    --clr-background-primary: #080C17;
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
