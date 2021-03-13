import styled from 'styled-components';

export const Span = styled.span`
  background-color: ${(p) => p.theme.black};
  display: inline-block;
  color: ${(p) => p.theme.white};
  padding: 16px 38px;
  min-width: 200px;
  text-align: center;
  box-shadow: 0 0 0 5px ${(p) => p.theme.black};

  transition: all 200ms ease;

  transform: translate(-12px, -12px);

  &:hover {
    transform: translate(0);
  }
`;

export const Border = styled.div`
  border: 3px solid ${(p) => p.theme.black};
  height: 100%;
  width: 100%;

  transform: translate(12px, 12px);
`;

export const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  font-size: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    span {
      box-shadow: 0 0 0 5px blue;
    }
  }
`;
