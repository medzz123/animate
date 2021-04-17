import { css } from 'styled-components';

export const buttonReset = css`
  background: none;
  padding: 0;
  border: 0;
  box-shadow: none;

  &:hover {
    cursor: pointer;
  }
`;

export const listReset = css`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flipReset = css`
  p,
  a,
  li,
  ul {
    color: ${(p) => p.theme.secondaryParagraph};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(p) => p.theme.secondaryHeadline};
  }
`;
