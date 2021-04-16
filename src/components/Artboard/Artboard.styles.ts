import styled, { createGlobalStyle, css } from 'styled-components';

import { tokens } from '../../theme/tokens';

export const ArtboardContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  background-color: gainsboro;
`;

export const AnimationsManager = styled.div<{ animations: string }>`
  #node {
    background-color: red;
    width: 40px;
    height: 40px;
  }

  #node {
    animation: 2s ease 0s infinite normal none running animate;

    ${(p) => p.animations}
  }
`;

export const IFrame = styled.iframe`
  width: 800px;
  height: 600px;
  box-shadow: inset 0 0 0 1px ${`#4169e1${tokens.alpha[30]}`};
`;

const styles = css`
  body,
  html {
    margin: 0;
    padding: 0;
    width: 800px;
    height: 600px;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export const GlobalFrameStyles = createGlobalStyle`
  ${styles}
`;
