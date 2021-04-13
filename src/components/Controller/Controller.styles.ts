import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const ControllerContainer = styled.div`
  overflow: scroll;
  height: ${tokens.sizes.full};
  padding: ${tokens.sizes[8]};
  min-width: ${tokens.sizes['2xs']};

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
