import { tokens } from '@theme/tokens';
import styled from 'styled-components';

import { ButtonStyles } from './Button.models';

export const ButtonContainer = styled.button.attrs({
  type: 'button',
})<ButtonStyles>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(p) => p.theme.accent};

  transition: all ${tokens.transitions.fast} ease 0s;
  font-size: ${(p) =>
    p.size === 'large' ? tokens.sizes[18] : tokens.sizes[12]};

  color: ${(p) => (p.variant === 'primary' ? p.theme.black : p.theme.white)};

  display: inline-flex;
  font-weight: 500;
  padding: ${(p) =>
    p.size === 'large'
      ? `${tokens.sizes[12]}
    ${tokens.sizes[28]}`
      : `${tokens.sizes[4]}
      ${tokens.sizes[12]}`};

  line-height: 1.5;

  &:hover {
    color: ${(p) => (p.variant === 'primary' ? p.theme.white : p.theme.black)};
  }
`;
