import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const MaxWidth = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mq(768)} {
    transform: translateY(-${tokens.sizes[48]});
  }

  h1,
  p {
    text-align: center;
  }

  max-width: ${tokens.sizes['3xl']};
`;

export const HomeButton = styled.button`
  background-color: ${(p) => p.theme.main};
  color: ${(p) => p.theme.background};
  padding: ${tokens.sizes[14]} ${tokens.sizes[20]};
  font-size: ${tokens.sizes[18]};
  font-weight: 500;
`;
