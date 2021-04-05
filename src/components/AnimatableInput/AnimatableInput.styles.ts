import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const AnimatableInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: ${tokens.sizes['2xs']};
  margin-bottom: ${tokens.sizes[12]};
`;

export const Label = styled.label`
  font-size: ${tokens.sizes[12]};
  color: ${(p) => p.theme.black};
  flex: 1;
  margin-right: ${tokens.sizes[8]};
  min-width: ${tokens.sizes[100]};
`;

export const StyledInput = styled.input`
  font-size: ${tokens.sizes[12]};
  padding: ${tokens.sizes[5]};
  color: ${(p) => p.theme.black};
  border: none;
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.black};
  background-color: transparent;
  width: ${tokens.sizes.full};
  flex: 2;

  &:focus {
    outline: none;
  }
`;
