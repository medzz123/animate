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

export const NewFrameInput = styled.input`
  border: none;
  box-shadow: inset 0 0 0 1px ${(p) => p.theme.paragraph};
  background-color: transparent;
  padding-left: 4px;
  width: 26px;
  color: ${(p) => p.theme.paragraph};
  height: 26px;

  &:focus {
    outline: none;
  }
`;
