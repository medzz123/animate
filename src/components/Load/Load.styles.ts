import styled from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

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
  padding: ${tokens.sizes[5]};
  border: none;
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.headline};
  background-color: transparent;
  width: ${tokens.sizes.full};
  color: ${(p) => p.theme.headline};

  &:focus {
    outline: none;
  }
`;

export const SelectAnimationButton = styled.button.attrs({ type: 'button' })`
  ${buttonReset}

  color: ${(p) => p.theme.headline};

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

  color: ${(p) => p.theme.somethingNew.danger};

  svg {
    width: ${tokens.sizes[20]};
    height: ${tokens.sizes[20]};
  }
`;
