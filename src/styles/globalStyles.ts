import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    
    * {
        font-family: 'Montserrat', 'Ubuntu', sans-serif;
        scroll-behavior: smooth;
        font-size: 16px;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
