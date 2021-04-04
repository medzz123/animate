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
`;

export const Content = styled.main<ContentProps>`
  width: ${padding}%;
  height: ${(p) => (((p.h / p.w) * padding) / 100) * p.x}px;
  background: pink;
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
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: calc(100% - 37px - 37px - 156px);
`;

export const FrameContainer = styled.div.attrs({ id: 'container' })`
  background-color: yellow;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LeftSidePanel = styled.div`
  height: 100%;
  padding: 12px;
  background-color: royalblue;
  display: none;

  ${mq(992)} {
    display: block;
  }
`;

export const ControlsPanel = styled.div`
  width: 100%;
  background-color: green;
`;

export const BottomPanel = styled.div`
  width: 100%;
  background-color: red;
`;
