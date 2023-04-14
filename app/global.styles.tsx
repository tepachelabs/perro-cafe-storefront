import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  
  body {
    background-color: #F8EEE0
  }
`;
