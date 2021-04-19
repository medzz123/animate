import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const SettingsContainer = styled.button`
  position: fixed;

  top: 25%;
  display: flex;
  transition: transform ${tokens.transitions.fast} ease;

  z-index: ${tokens.zIndices[9999]};

  width: ${tokens.sizes[20]};
  height: ${tokens.sizes[20]};
  background-color: ${(p) => p.theme.button};
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center left;

  outline: none;
`;
