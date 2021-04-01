import styled from 'styled-components';

export const AnimatableInputContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  width: 350px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${(p) => p.theme.black};
`;

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 5px;
  color: ${(p) => p.theme.black};
  border: none;
  box-shadow: 0 0 0 2px ${(p) => p.theme.black};
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
