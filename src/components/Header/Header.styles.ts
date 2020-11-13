import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 20px;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 20px;
  }
`;
