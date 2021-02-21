import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  html {
    font-family: 'Mulish', sans-serif;
    scroll-behavior: smooth;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: ${(p) => p.theme.white};
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: 'Mulish', sans-serif;
    color: ${(p) => p.theme.black};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Abril Fatface', sans-serif;
    color: ${(p) => p.theme.black};
    margin: 0;
  }

  h1 {
    font-size: 5vh;
    font-weight: 600;
  }

  @media screen and (max-width: 996px) {
    h1 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 479px) {
    h1 {
      font-size: 37px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-size: 18px;
    line-height: 32px;
    margin: 0;
  }

  p,
  span {
    color: ${(p) => p.theme.black};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${styles}
`;
