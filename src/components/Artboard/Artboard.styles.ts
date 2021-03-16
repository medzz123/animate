import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const ArtboardContainer = styled.div`
  width: ${tokens.sizes.full};
  height: ${tokens.sizes.full};

  border: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[44]};
`;
