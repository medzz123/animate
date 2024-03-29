import { createGlobalStyle, css } from 'styled-components';

import { buttonReset, listReset } from './resets';
import { tokens } from './tokens';

const layoutStyles = css`
  html {
    display: flex;
    min-height: ${tokens.sizes.full};
  }

  body,
  #root,
  main {
    display: flex;
    flex: 1;
    height: auto;
    min-height: auto;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

const fontStyles = css`
  html {
    font-family: 'Inter', sans-serif;
  }

  p,
  a,
  button,
  input,
  label,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif;
    line-height: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-size: ${tokens.sizes[48]};
    font-weight: 900;
  }

  h3 {
    font-size: ${tokens.sizes[16]};
  }

  p {
    font-weight: 500;
    font-size: ${tokens.sizes[18]};
    line-height: 1.5;
  }

  a {
    font-size: ${tokens.sizes[18]};
    font-weight: 600;
  }
`;

const colorStyles = css`
  body {
    background-color: ${(p) => p.theme.background};
    color: ${(p) => p.theme.main};
  }

  p {
    color: ${(p) => p.theme.paragraph};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(p) => p.theme.main};
  }

  a {
    color: inherit;
  }

  button {
    color: ${(p) => p.theme.main};
  }
`;

const generalStyles = css`
  html {
    scroll-behavior: smooth;
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
    text-transform: capitalize;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0 0 ${tokens.sizes[16]} 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 ${tokens.sizes[16]} 0;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    transition: all ${tokens.transitions.fast} ease;
    margin: ${tokens.sizes[4]} ${tokens.sizes[12]};
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${generalStyles}
  ${layoutStyles}
  ${fontStyles}
  ${colorStyles}
`;
