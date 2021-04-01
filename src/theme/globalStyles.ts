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

    background-color: ${(p) => p.theme.accent};

    transition: all ${tokens.transitions.fast} ease-out 0s;
    font-size: ${tokens.sizes[14]};
    border: none;
    outline: none;

    display: inline-flex;
    font-weight: 500;
    padding: ${tokens.sizes[10]} ${tokens.sizes[24]};

    line-height: 1.5;

    &:focus {
      box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.black};
    }

    &:hover {
      color: white;
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
  label {
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
      box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.black};
    }
  }

  .flip {
    * {
      color: ${(p) => p.theme.white};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${styles}
`;
