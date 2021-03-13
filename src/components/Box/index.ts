import styled from 'styled-components';

interface BoxProps {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;

  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;

  w?: number;
  h?: number;
}

const Box = styled.div<BoxProps>`
  margin-left: ${(p) => p.ml}px;
  margin-right: ${(p) => p.mr}px;
  margin-bottom: ${(p) => p.mb}px;
  margin-top: ${(p) => p.mt}px;
  margin: ${(p) => p.m}px;

  padding-left: ${(p) => p.pl}px;
  padding-right: ${(p) => p.pr}px;
  padding-bottom: ${(p) => p.pb}px;
  padding-top: ${(p) => p.pt}px;
  padding: ${(p) => p.p}px;

  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;
`;

export default Box;
