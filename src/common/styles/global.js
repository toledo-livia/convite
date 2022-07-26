import { createGlobalStyle } from 'styled-components';

import background from '../images/background.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #acd8e6;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 70%;
    min-height: 100vh;
    @media(max-width: 780px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export default GlobalStyle;
