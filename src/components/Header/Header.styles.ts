import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const HeaderContainer = styled.div`
  padding: ${tokens.sizes[24]} ${tokens.sizes[24]};
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  font-weight: 900;
  font-size: ${tokens.sizes[22]};
  cursor: pointer;
  transition: color 200ms ease;
  color: ${(p) => p.theme.accent};
  margin-left: 0;

  &:hover {
    color: ${(p) => p.theme.black};
  }
`;

export const MainLink = styled(Link)`
  color: ${(p) => p.theme.accent};

  margin-right: 0;
  &:hover {
    color: ${(p) => p.theme.black};
  }
`;
