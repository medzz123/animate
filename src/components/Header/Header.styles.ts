import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const HeaderContainer = styled.div`
  padding: ${tokens.sizes[12]} ${tokens.sizes[12]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  font-weight: 900;
  font-size: ${tokens.sizes[22]};
  cursor: pointer;
  transition: color 200ms ease;
  color: ${(p) => p.theme.paragraph};
  margin-left: 0;
`;

export const MainLink = styled(Link)`
  color: ${(p) => p.theme.paragraph};

  margin-right: 0;
`;
