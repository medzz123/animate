import styled from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

export const UploadButton = styled.input`
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

export const List = styled.ul`
  flex-direction: column;
  align-items: flex-start;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: ${tokens.sizes.full};
  align-items: center;
  margin-bottom: ${tokens.sizes[8]};
  text-transform: capitalize;
`;

export const NewAnimationInput = styled.input`
  font-size: ${tokens.sizes[12]};
  padding: ${tokens.sizes[8]};
  border: none;
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.main}${tokens.alpha[50]};
  border-radius: ${tokens.sizes[10]};
  background-color: transparent;
  color: ${(p) => p.theme.paragraph};

  &:focus {
    outline: none;
  }
`;

export const SelectAnimationButton = styled.button.attrs({ type: 'button' })`
  ${buttonReset}

  color: ${(p) => p.theme.main};

  font-weight: 500;
  font-size: ${tokens.sizes[18]};
  line-height: 1.5;
  justify-content: flex-start;
  width: ${tokens.sizes.full};
  margin-right: ${tokens.sizes[8]};

  &:hover,
  &:focus {
    text-decoration: underline;
    box-shadow: none;
  }
`;

export const DeleteAnimationButton = styled.button.attrs({ type: 'button' })`
  ${buttonReset}

  color: ${(p) => p.theme.danger};

  svg {
    width: ${tokens.sizes[20]};
    height: ${tokens.sizes[20]};
  }
`;
