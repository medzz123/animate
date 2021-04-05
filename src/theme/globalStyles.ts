import { createGlobalStyle, css } from 'styled-components';

import { buttonReset, listReset } from './resets';
import { tokens } from './tokens';

const styles = css`
  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: ${(p) => p.theme.white};
    color: ${(p) => p.theme.black};
  }

  * {
    box-sizing: border-box;
  }

  ul {
    ${listReset}
  }

  button {
    ${buttonReset}
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.black};
    }
  }

  p {
    color: currentColor;
    font-weight: 500;
    font-size: ${tokens.sizes[18]};
    line-height: 1.5;
    margin: 0 0 ${tokens.sizes[16]} 0;
  }

  p,
  a,
  button,
  input,
  label,
  div {
    font-family: 'Inter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: currentColor;
    margin: 0 0 ${tokens.sizes[16]} 0;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: ${tokens.sizes[48]};
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    transition: all 200ms ease;

    margin: ${tokens.sizes[4]} ${tokens.sizes[12]};
    font-size: ${tokens.sizes[18]};
    font-weight: 600;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      text-decoration: underline;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${styles}
`;
