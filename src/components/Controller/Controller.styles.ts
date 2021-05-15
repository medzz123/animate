import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const ControllerContainer = styled.div`
  position: relative;
  overflow: scroll;
  height: ${tokens.sizes.full};
  padding: ${tokens.sizes[8]};
  width: 14.3125rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  p {
    color: ${(p) => p.theme.flip};
  }
`;
