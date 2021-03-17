import { tokens } from '@theme/tokens';
import styled from 'styled-components';

import { FrameStyles } from './Frame.models';

export const IFrame = styled.iframe<FrameStyles>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};

  border: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[44]};
`;
