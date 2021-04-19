import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { DisplayRatioProps, DisplaySizeProps } from './Display.models';

const w320 = 300;
const h320 = 280;

const w768 = 700;
const h768 = 500;

export const DisplayContainer = styled.div`
  height: ${h320}px;
  width: ${w320}px;
  position: relative;

  ${mq(768)} {
    height: ${h768}px;
    width: ${w768}px;
  }
`;

export const DisplayFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const padding = 95;

export const DisplayAnimations = styled.div<{
  css: string;
  animations: string;
  nodes: string;
}>`
  ${(p) => p.css}
  ${(p) => p.animations}
${(p) => p.nodes} {
    animation-play-state: running;
  }
`;

export const DisplayRatio = styled.div<DisplayRatioProps>`
  width: ${padding}%;
  height: ${(p) =>
    (((p.artboardHeight / p.artboardWidth) * padding) / 100) * w320}px;
  max-height: ${padding}%;
  max-width: ${(p) =>
    (((p.artboardWidth / p.artboardHeight) * padding) / 100) * h320}px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1px ${(p) => p.theme.headline};

  ${mq(768)} {
    height: ${(p) =>
      (((p.artboardHeight / p.artboardWidth) * padding) / 100) * w768}px;
    max-width: ${(p) =>
      (((p.artboardWidth / p.artboardHeight) * padding) / 100) * h768}px;
  }
`;

export const DisplaySize = styled.div<DisplaySizeProps>`
  width: ${(p) => p.artboardWidth}px;
  height: ${(p) => p.artboardHeight}px;
  transform: scale(${(p) => p.width / p.artboardWidth});
  transform-origin: top left;
`;
