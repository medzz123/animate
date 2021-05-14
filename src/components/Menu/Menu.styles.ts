import { Content, Item, Trigger } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const StyledTrigger = styled(Trigger)`
  color: ${(p) => p.theme.headline};
  padding: ${tokens.sizes[4]};
  border-radius: ${tokens.sizes[4]};

  height: ${tokens.sizes[32]};
  width: ${tokens.sizes[32]};

  background-color: white;
`;

export const StyledContent = styled(Content)`
  min-width: ${tokens.sizes['3xs']};
  background-color: ${(p) => p.theme.background};
  border-radius: ${tokens.sizes[6]};
  padding: ${tokens.sizes[4]};
  margin-top: ${tokens.sizes[12]};
  box-shadow: 0 0 ${tokens.sizes[12]} ${tokens.sizes[4]}
    ${(p) => p.theme.headline}${tokens.alpha[8]};
`;

export const StyledItem = styled(Item)`
  font-size: ${tokens.sizes[13]};
  padding: ${tokens.sizes[5]} ${tokens.sizes[10]};
  border-radius: ${tokens.sizes[3]};
  cursor: default;
  color: ${(p) => p.theme.headline};

  &:focus {
    outline: none;
    background-color: ${(p) => p.theme.button};
    color: ${(p) => p.theme.background};
  }
`;
