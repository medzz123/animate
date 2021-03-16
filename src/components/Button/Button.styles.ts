import { tokens } from '@theme/tokens';
import styled from 'styled-components';

import { ButtonStyles } from './Button.models';

export const Span = styled.span`
  color: currentColor;
  line-height: 1;
  margin: ${tokens.sizes[0]} ${tokens.sizes[8]};
`;

export const StyledButton = styled.button<ButtonStyles>`
  padding: ${({ size }) =>
    size === 'large'
      ? `${tokens.sizes[16]} ${tokens.sizes[44]}`
      : `${tokens.sizes[6]} ${tokens.sizes[16]}`};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant, theme: { black } }) =>
    variant === 'primary' ? black : 'transparent'};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all ease 200ms;
  color: ${({ variant, theme: { white, black } }) =>
    variant === 'primary' ? white : black};

  svg {
    fill: currentColor;
  }

  span {
    font-size: ${({ size }) =>
      size === 'large' ? tokens.sizes[18] : tokens.sizes[12]};
  }

  &:focus {
    box-shadow: 0 0 0 ${tokens.sizes[5]} ${(p) => p.theme.accent};
  }

  box-shadow: 0 0 0 ${tokens.sizes[5]} ${(p) => p.theme.black};

  &:hover {
    background-color: ${({ variant, theme: { black } }) =>
      variant === 'primary' ? 'transparent' : black};

    box-shadow: 0 0 0 ${tokens.sizes[5]} ${(p) => p.theme.black};
    color: ${({ variant, theme: { white, black } }) =>
      variant === 'primary' ? black : white};
  }
`;
