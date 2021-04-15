import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const Container = styled.div`
  border: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[50]};
  width: calc(100vw - ${tokens.sizes[48]});
  height: calc(100vh - 6.813rem - ${tokens.sizes[24]});
`;

interface ContentProps {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ArtboardProps {
  w: number;
  h: number;
  s: number;
}

const padding = 90;

export const ArtboardSize = styled.div<ArtboardProps>`
  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;

  transform: scale(${(p) => p.s});
  transform-origin: top left;
  display: inline-block;
`;

export const Content = styled.main<ContentProps>`
  width: ${padding}%;
  height: ${(p) => (((p.h / p.w) * padding) / 100) * p.x}px;
  max-height: ${padding}%;
  max-width: ${(p) => (((p.w / p.h) * padding) / 100) * p.y}px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.black}${tokens.alpha[50]};
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  border-bottom: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[50]};
  padding: ${tokens.sizes[8]};
  height: ${tokens.sizes[44]};
`;

export const FlexContainer = styled.div`
  display: flex;
  height: calc(100% - 5.5rem - ${tokens.sizes['4xs']});
`;

export const FrameContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  background-color: gainsboro;
`;

export const LeftSidePanel = styled.div<{ closed?: boolean }>`
  ${(p) => p.closed && `display: none;`}
  border: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[50]};
  position: absolute;
  right: ${tokens.sizes[24]};
  background-color: ${(p) => p.theme.white}${tokens.alpha[80]};
  height: calc(100vh - ${tokens.sizes[88]} - 5.65rem);
  z-index: 9999999;

  ${mq(992)} {
    display: block;
    position: static;
    height: ${tokens.sizes.full};
    border: none;
    border-left: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[50]};
  }
`;

export const ControlsPanel = styled.div`
  border-top: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[50]};
  width: ${tokens.sizes.full};
  height: ${tokens.sizes[44]};
`;

export const BottomPanel = styled.div`
  border-top: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[50]};
`;
