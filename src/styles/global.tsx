import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        color: ${({ theme }) => theme.white};
    }
:root{
    --border-thin: 0.07rem;
    --border-regular: 0.125rem;
    --border-large: 0.2rem;

    --fs-100: 1rem;
    --fs-200: 1.25rem;
    --fs-300: 1.50rem;
    --fs-400: 1.75rem;
    --fs-500: 2rem;
    --fs-600: 2.50rem;
    --fs-700: 2.75rem;
    --fs-800: 3rem;
    --fs-900: 3.50rem;
    
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

    --white: #FFFFFF;
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
