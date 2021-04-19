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
