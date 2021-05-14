import { Content, Overlay } from '@radix-ui/react-dialog';
import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const StyledTrigger = styled.button`
  font-size: ${tokens.sizes[16]};
  font-weight: 300;
  color: ${(p) => p.theme.somethingNew.main};

  span + svg {
    margin-left: ${tokens.sizes[8]};
    width: ${tokens.sizes[16]};
    height: ${tokens.sizes[16]};
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

  box-shadow: 0 0 ${tokens.sizes[12]} ${tokens.sizes[4]}
    ${(p) => p.theme.headline}${tokens.alpha[8]};

  overflow-y: scroll;

  ${mq(768)} {
    max-width: ${tokens.sizes['lg']};
  }

  &:focus {
    outline: none;
  }
`;
