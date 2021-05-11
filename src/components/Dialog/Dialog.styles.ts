import { Content, Overlay, Trigger } from '@radix-ui/react-dialog';
import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const StyledTrigger = styled(Trigger)`
  font-size: 16px;
  font-weight: 300;
  color: hsla(226, 32%, 28%, 1);

  span + svg {
    margin-left: 8px;
    width: 16px;
    height: 16px;
  }
`;

export const StyledOverlay = styled(Overlay)`
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledContent = styled(Content)`
  position: fixed;
  top: ${tokens.sizes.half};
  left: ${tokens.sizes.half};
  transform: translate(-${tokens.sizes.half}, -${tokens.sizes.half});
  min-width: ${tokens.sizes['3xs']};
  width: calc(100vw - ${tokens.sizes[48]});
  max-height: 85vh;
  padding: ${tokens.sizes[12]};
  border-radius: ${tokens.sizes[6]};
  padding: ${tokens.sizes[24]};
  background-color: ${(p) => p.theme.background};

  overflow-y: scroll;

  ${mq(768)} {
    max-width: ${tokens.sizes['lg']};
  }

  &:focus {
    outline: none;
  }
`;
