import { mq } from '@theme/mediaQueries';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${(p) => p.theme.black}${tokens.alpha[50]};
  width: 100%;
  height: calc(100vh - 109px - 24px);
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
  box-shadow: 0 0 0 1px ${(p) => p.theme.black}${tokens.alpha[50]};
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${(p) => p.theme.black}${tokens.alpha[50]};
  padding: 8px;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: calc(100% - 37px - 37px - 32px - 200px);
`;

export const FrameContainer = styled.div.attrs({ id: 'container' })`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LeftSidePanel = styled.div`
  height: 100%;
  display: none;
  border-left: 1px solid ${(p) => p.theme.black}${tokens.alpha[50]};

  ${mq(992)} {
    display: block;
  }
`;

export const ControlsPanel = styled.div`
  border-top: 1px solid ${(p) => p.theme.black}${tokens.alpha[50]};
  width: 100%;
  padding: 8px;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomPanel = styled.div`
  border-top: 1px solid ${(p) => p.theme.black}${tokens.alpha[50]};
  width: 100%;
  padding: 8px;
  height: 200px;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
