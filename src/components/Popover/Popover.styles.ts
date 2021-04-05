import { Content, Trigger } from '@radix-ui/react-popover';
import { secondaryButtonStyles } from '@theme/reusable';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const StyledTrigger = styled(Trigger)`
  ${secondaryButtonStyles}
`;

export const StyledContent = styled(Content)`
  padding: ${tokens.sizes[24]};
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.black};
  margin-top: ${tokens.sizes[12]};
  max-width: calc(100vw - ${tokens.sizes[48]});

  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.black};
  }
`;
