import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const Code = styled.code`
  display: block;
  white-space: pre-wrap;

  border: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens.alpha[50]};
  padding: ${tokens.sizes[8]};
  max-height: ${tokens.sizes['2xs']};
  overflow-y: scroll;
`;
