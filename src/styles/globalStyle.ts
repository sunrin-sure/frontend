import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    html, body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background: #f4f7fd;
    }

    p {
        margin: 0;
    }

    input, button {
        padding: 0;
        outline: none;
    }  
    button {
        cursor: pointer;
    }
`