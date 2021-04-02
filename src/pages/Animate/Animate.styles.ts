import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${(p) => p.theme.black}${tokens.alpha[50]};
  width: 100%;
  height: calc(100vh - 112px - 72px);
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
`;
