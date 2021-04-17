import { css } from 'styled-components';

import { tokens } from './tokens';

export const secondaryButtonStyles = css`
  background-color: ${(p) => p.theme.button};

  transition: all ${tokens.transitions.fast} ease 0s;
  font-size: ${tokens.sizes[12]};

  color: ${(p) => p.theme.buttonText};

  display: inline-flex;
  font-weight: 500;
  padding: ${tokens.sizes[4]} ${tokens.sizes[12]};

  line-height: 1.5;

  &:hover {
    box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.headline};
  }
`;
