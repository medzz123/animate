import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const Center = styled.div``;

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
