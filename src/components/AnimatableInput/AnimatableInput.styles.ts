import styled from 'styled-components';

export const AnimatableInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 350px;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${(p) => p.theme.black};
  flex: 1;
  margin-right: 8px;
  min-width: 120px;
`;

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 5px;
  color: ${(p) => p.theme.black};
  border: none;
  box-shadow: inset 0 0 0 2px ${(p) => p.theme.black};
  background-color: transparent;
  width: 100%;
  flex: 2;

  &:focus {
    outline: none;
  }
`;
