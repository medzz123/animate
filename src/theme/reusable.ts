import { css } from 'styled-components';

import { tokens } from './tokens';

export const secondaryButtonStyles = css`
  background-color: ${(p) => p.theme.accent};

  transition: all ${tokens.transitions.fast} ease 0s;
  font-size: ${tokens.sizes[12]};

  color: ${(p) => p.theme.white};

  display: inline-flex;
  font-weight: 500;
  padding: ${tokens.sizes[4]} ${tokens.sizes[12]};

  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
`;
