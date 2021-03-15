import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: red;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px blue;
  }
`;
