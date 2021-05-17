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

export const DeleteStep = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.danger};
  font-size: ${tokens.sizes[12]};
  color: ${(p) => p.theme.main};
  padding: ${tokens.sizes[6]} ${tokens.sizes[16]};

  border-radius: ${tokens.sizes[4]};
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  box-shadow: ${(p) => p.theme.buttonShadow};
`;
