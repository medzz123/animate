import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const AnimatableInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: ${tokens.sizes['2xs']};
  margin-bottom: ${tokens.sizes[12]};
`;

export const Label = styled.label`
  font-size: ${tokens.sizes[12]};
  color: ${(p) => p.theme.somethingNew.flip};
  flex: 1;
  margin-right: ${tokens.sizes[8]};
  min-width: ${tokens.sizes[100]};
`;

export const StyledInput = styled.input`
  font-size: ${tokens.sizes[12]};
  padding: ${tokens.sizes[5]};
  color: ${(p) => p.theme.somethingNew.flip};
  border: none;
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.somethingNew.flip};
  background-color: transparent;
  width: ${tokens.sizes.full};
  flex: 2;

  ::placeholder {
    color: ${(p) => p.theme.somethingNew.flip};
    opacity: 0.5;
  }

  border-radius: ${tokens.sizes[8]};

  &:focus {
    outline: none;
  }
`;
