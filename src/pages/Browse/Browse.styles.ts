import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const Container = styled.main``;

export const MaxWidth = styled.div`
  margin: 0 auto;

  max-width: ${tokens.sizes['3xl']};
`;

export const Card = styled.div`
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid ${(p) => p.theme.black}${tokens.alpha[25]};
`;
