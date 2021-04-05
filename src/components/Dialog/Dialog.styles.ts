import { Content, Overlay, Trigger } from '@radix-ui/react-dialog';
import { mq } from '@theme/mediaQueries';
import { secondaryButtonStyles } from '@theme/reusable';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const StyledTrigger = styled(Trigger)`
  ${secondaryButtonStyles}
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
  color: ${(p) => p.theme.black};
  overflow-y: scroll;

  ${mq(768)} {
    max-width: fit-content;
  }

  &:focus {
    outline: none;
  }
`;
