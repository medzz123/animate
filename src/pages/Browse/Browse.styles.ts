import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const Container = styled.main``;

export const MaxWidth = styled.div`
  margin: 0 auto;

  max-width: ${tokens.sizes['3xl']};
`;

export const Card = styled.div`
  padding: ${tokens.sizes[8]};
  margin-bottom: ${tokens.sizes[8]};
  border: ${tokens.sizes[1]} solid ${(p) => p.theme.button}${tokens.alpha[25]};
`;
