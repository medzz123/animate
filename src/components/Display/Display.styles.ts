import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';
import { DisplayRatioProps, DisplaySizeProps } from './Display.models';

const w320 = 300;
const h320 = 280;

const w768 = 700;
const h768 = 500;

const w992 = 900;
const h992 = 600;

export const DisplayContainer = styled.div`
  height: ${h320}px;
  width: ${w320}px;
  position: relative;

  ${mq(768)} {
    height: ${h768}px;
    width: ${w768}px;
  }

  ${mq(992)} {
    height: ${h992}px;
    width: ${w992}px;
  }
`;

export const DisplayFrame = styled.iframe`
  width: ${tokens.sizes.full};
  height: ${tokens.sizes.full};
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

/**
 * As this page can contain a lot of animations running at the same time,
 * instead of listenting to browser resize events and always filling the
 * maximum space available, it uses media queries to only occupy certain amount
 * of space while keeping the ratio
 */
export const DisplayRatio = styled.div<DisplayRatioProps>`
  border: ${tokens.sizes[5]} dashed #f0f0f0;

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

  ${mq(768)} {
    height: ${(p) =>
      (((p.artboardHeight / p.artboardWidth) * padding) / 100) * w768}px;
    max-width: ${(p) =>
      (((p.artboardWidth / p.artboardHeight) * padding) / 100) * h768}px;
  }

  ${mq(992)} {
    height: ${(p) =>
      (((p.artboardHeight / p.artboardWidth) * padding) / 100) * w992}px;
    max-width: ${(p) =>
      (((p.artboardWidth / p.artboardHeight) * padding) / 100) * h992}px;
  }
`;

export const DisplaySize = styled.div<DisplaySizeProps>`
  width: ${(p) => p.artboardWidth}px;
  height: ${(p) => p.artboardHeight}px;
  transform: scale(${(p) => p.width / p.artboardWidth});
  transform-origin: top left;
`;
