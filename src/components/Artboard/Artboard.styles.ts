import styled, { createGlobalStyle, css } from 'styled-components';

import { tokens } from '../../theme/tokens';
import { ArtboardSizeProps, AspectRatioProps } from './Artboard.models';

const padding = 95;

export const ArtboardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const AspectRatio = styled.div.attrs({
  id: 'aspect-ratio',
})<AspectRatioProps>`
  width: ${padding}%;
  height: ${(p) =>
    (((p.artboardHeight / p.artboardWidth) * padding) / 100) * p.parentWidth}px;
  max-height: ${padding}%;
  max-width: ${(p) =>
    (((p.artboardWidth / p.artboardHeight) * padding) / 100) *
    p.parentHeight}px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1px ${(p) => p.theme.secondaryBackground}${tokens.alpha[30]};
`;

export const ArtboardSize = styled.div<ArtboardSizeProps>`
  width: ${(p) => p.artboardWidth}px;
  height: ${(p) => p.artboardHeight}px;
  transform: scale(${(p) => p.scale});
  transform-origin: top left;
  display: inline-block;
`;

export const AnimationsManager = styled.div<{
  css: string;
  animations: string;
}>`
  ${(p) => p.css}
  ${(p) => p.animations}
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const styles = css`
  body,
  html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export const GlobalFrameStyles = createGlobalStyle`
  ${styles}
`;