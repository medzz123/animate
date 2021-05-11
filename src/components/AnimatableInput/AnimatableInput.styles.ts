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
  color: white;
  flex: 1;
  margin-right: ${tokens.sizes[8]};
  min-width: ${tokens.sizes[100]};
`;

export const StyledInput = styled.input`
  font-size: ${tokens.sizes[12]};
  padding: ${tokens.sizes[5]};
  color: white;
  border: none;
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} #f0f0f0;
  background-color: transparent;
  width: ${tokens.sizes.full};
  flex: 2;

  ::placeholder {
    color: #f0f0f0;
    opacity: 0.5;
  }

  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;
