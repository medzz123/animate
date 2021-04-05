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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  width: calc(100vw - 48px);
  max-height: 85vh;
  padding: 20px;
  margin-top: -5vh;
  border-radius: 6px;
  padding: ${tokens.sizes[24]};
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.black};

  ${mq(768)} {
    max-width: fit-content;
  }

  &:focus {
    outline: none;
  }
`;
