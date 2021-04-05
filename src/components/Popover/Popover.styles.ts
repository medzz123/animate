import { Content } from '@radix-ui/react-popover';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const StyledContent = styled(Content)`
  padding: ${tokens.sizes[24]};
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.black};
  margin-top: ${tokens.sizes[12]};
  max-width: calc(100vw - 52px);

  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.black};
  }
`;
