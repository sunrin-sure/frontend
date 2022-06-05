import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 100;
        src: url('/fonts/NotoSans-Thin.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NotoSans-Thin.woff') format('woff'),
        url('/fonts/NotoSans-Thin.otf') format('opentype');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 300;
        src: url('/fonts/NotoSans-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NotoSans-Light.woff2') format('woff2'),
        url('/fonts/NotoSans-Light.woff') format('woff'),
        url('/fonts/NotoSans-Light.otf') format('opentype');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 400;
        src: url('/fonts/NotoSans-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NotoSans-Regular.woff2') format('woff2'),
        url('/fonts/NotoSans-Regular.woff') format('woff'),
        url('/fonts/NotoSans-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 500;
        src: url('/fonts/NotoSans-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NotoSans-Medium.woff2') format('woff2'),
        url('/fonts/NotoSans-Medium.woff') format('woff'),
        url('/fonts/NotoSans-Medium.otf') format('opentype');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 700;
        src: url('/fonts/NotoSans-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NotoSans-Bold.woff2') format('woff2'),
        url('/fonts/NotoSans-Bold.woff') format('woff'),
        url('/fonts/NotoSans-Bold.otf') format('opentype');
    }
    
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 900;
        src: url('/fonts/NotoSans-Black.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NotoSans-Black.woff2') format('woff2'),
        url('/fonts/NotoSans-Black.woff') format('woff'),
        url('/fonts/NotoSans-Black.otf') format('opentype');
    }
    
    * {
        font-family: 'Noto Sans KR', sans-serif;
    }

    body, html {
        background: #fbfbff;
    }

    body, p {
        margin: 0;
    }

    input, button {
        outline: none;
    }
`