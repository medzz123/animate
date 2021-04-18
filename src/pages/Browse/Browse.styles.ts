import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const Container = styled.main``;

export const MaxWidth = styled.div`
  margin: 0 auto;

  max-width: ${tokens.sizes['5xl']};
`;

export const Card = styled.div`
  margin-bottom: ${tokens.sizes[20]};
  border: ${tokens.sizes[1]} solid ${(p) => p.theme.secondaryBackground}${tokens.alpha[60]};

  text-transform: capitalize;
`;

export const ActionsContainer = styled.div`
  padding: ${tokens.sizes[8]};
  border-bottom: ${tokens.sizes[1]} solid ${(p) => p.theme.secondaryBackground}${tokens.alpha[60]};
  display: flex;

  p {
    margin-bottom: 0;
  }
`;

export const ArtboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
