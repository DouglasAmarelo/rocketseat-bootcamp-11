import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html,
  body,
  #app {
    min-height: 100vh;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) top right no-repeat;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }
`;
