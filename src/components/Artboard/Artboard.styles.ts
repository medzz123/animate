import styled from 'styled-components';

import { ZoomProps } from './Artboard.models';

export const ArtboardWrapper = styled.div`
  width: 100%;
`;

export const Board = styled.div`
  overflow: hidden;
  border: 1px solid black;
  background-color: tomato;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Zoom = styled.div<ZoomProps>`
  transform: scale(${(p) => p.scale});
  border: 1px solid red;
  background-color: white;
  width: 300px;
  height: 300px;
`;
