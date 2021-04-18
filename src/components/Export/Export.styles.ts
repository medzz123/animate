import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const Code = styled.code`
  display: block;
  white-space: pre-wrap;

  color: ${(p) => p.theme.secondaryParagraph};

  border: ${tokens.sizes[1]} solid ${(p) => p.theme.secondaryParagraph}${tokens.alpha[50]};
  padding: ${tokens.sizes[8]};
`;
