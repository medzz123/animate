import styled, { css } from 'styled-components';

import { tokens } from '../../theme/tokens';
import { ButtonStyles } from './Button.models';

export const ButtonContainer = styled.button.attrs({
  type: 'button',
})<ButtonStyles>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.size === 'icon' &&
    css`
      width: ${tokens.sizes[26]};
      height: ${tokens.sizes[26]};
    `}

  background-color: ${(p) => p.theme.somethingNew.main};

  transition: all ${tokens.transitions.fast} ease 0s;
  font-size: ${(p) =>
    p.size === 'large' ? tokens.sizes[18] : tokens.sizes[12]};

  color: ${(p) => p.theme.somethingNew.flip};

  display: inline-flex;
  font-weight: 500;
  padding: ${(p) =>
    p.size === 'large'
      ? `${tokens.sizes[12]}
    ${tokens.sizes[28]}`
      : p.size === 'icon'
      ? tokens.sizes[0]
      : `${tokens.sizes[4]}
      ${tokens.sizes[12]}`};

  line-height: 1.5;
`;
