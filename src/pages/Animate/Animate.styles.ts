import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const Container = styled.div`
  border: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens.alpha[50]};
  width: 100%;
  height: calc(100vh - 6.875rem);
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  border-bottom: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens.alpha[50]};
  padding: ${tokens.sizes[8]};
  height: ${tokens.sizes[44]};
`;

export const FlexContainer = styled.div`
  display: flex;
  height: calc(100% - 5.5rem - ${tokens.sizes['4xs']});
`;

export const LeftSidePanel = styled.div<{ closed?: boolean }>`
  ${(p) => p.closed && `display: none;`}
  border: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens
    .alpha[50]};
  position: absolute;
  right: ${tokens.sizes[24]};
  background-color: ${(p) => p.theme.background}${tokens.alpha[95]};
  height: calc(100vh - ${tokens.sizes[88]} - 5.65rem);
  z-index: 500;

  ${mq(992)} {
    display: block;
    position: static;
    height: ${tokens.sizes.full};
    border: none;
    border-left: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens.alpha[50]};
  }
`;

export const ControlsPanel = styled.div`
  border-top: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens.alpha[50]};
  width: ${tokens.sizes.full};
  height: ${tokens.sizes[44]};
`;

export const BottomPanel = styled.div`
  border-top: ${tokens.sizes[1]} solid ${(p) => p.theme.headline}${tokens.alpha[50]};
`;
