import { Content, Item, Trigger } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const StyledTrigger = styled(Trigger)`
  color: ${(p) => p.theme.main};
  padding: ${tokens.sizes[4]};
  border-radius: ${tokens.sizes[4]};

  height: ${tokens.sizes[32]};
  width: ${tokens.sizes[32]};

  background-color: ${(p) => p.theme.background};
`;

export const StyledContent = styled(Content)`
  min-width: ${tokens.sizes['3xs']};
  background-color: ${(p) => p.theme.background};
  border-radius: ${tokens.sizes[6]};
  padding: ${tokens.sizes[4]};
  margin-top: ${tokens.sizes[12]};
  box-shadow: ${(p) => p.theme.shadow};
`;

export const StyledItem = styled(Item)`
  font-size: ${tokens.sizes[13]};
  padding: ${tokens.sizes[5]} ${tokens.sizes[10]};
  border-radius: ${tokens.sizes[3]};
  cursor: default;
  color: ${(p) => p.theme.main};

  &:focus {
    outline: none;
    background-color: ${(p) => p.theme.main};
    color: ${(p) => p.theme.background};
  }
`;
