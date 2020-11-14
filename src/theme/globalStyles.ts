import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(p) => p.theme.colors.background};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(p) => p.theme.colors.black};
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${styles}
`;
