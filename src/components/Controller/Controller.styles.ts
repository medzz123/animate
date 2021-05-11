import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const ControllerContainer = styled.div`
  position: relative;
  overflow: scroll;
  height: ${tokens.sizes.full};
  padding-top: ${tokens.sizes[8]};
  padding-bottom: ${tokens.sizes[8]};
  padding-left: ${tokens.sizes[8]};
  padding-right: ${tokens.sizes[8]};
  min-width: 229px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ActionsContainer = styled.div`
  position: sticky;
  left: 0;
  bottom: -8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(p) => p.theme.background};
  height: 40px;
`;
