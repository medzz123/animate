import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const ButtonContainer = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: all ${tokens.transitions.fast} ease 0s;
  font-size: ${tokens.sizes[12]};
  background-color: ${(p) => p.theme.focus};
  color: ${(p) => p.theme.main};
  padding: ${tokens.sizes[6]} ${tokens.sizes[16]};

  border-radius: ${tokens.sizes[4]};
  min-width: ${tokens.sizes[100]};
  font-weight: 400;
  line-height: 1.5;
  box-shadow: ${(p) => p.theme.buttonShadow};
`;
