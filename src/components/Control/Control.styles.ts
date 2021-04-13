import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${tokens.sizes[8]};
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
