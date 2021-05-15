import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const ControlCloseButton = styled.button`
  position: absolute;
  width: ${tokens.sizes[28]};
  height: ${tokens.sizes[28]};
  top: -${tokens.sizes[30]};
  right: -${tokens.sizes[20]};
  display: flex;
  justify-content: center;
  border-radius: ${tokens.sizes.half};
  align-items: center;
  color: ${(p) => p.theme.background};

  svg {
    width: ${tokens.sizes[40]};
    height: ${tokens.sizes[40]};
  }
`;

export const Container = styled.div`
  width: ${tokens.sizes.full};
  height: calc(100vh - 5.125rem);
  display: flex;
  flex-direction: column;
`;

export const AnimationContainer = styled.div`
  display: flex;
  margin-bottom: ${tokens.sizes[20]};

  box-shadow: ${(p) => p.theme.shadow};
  border-radius: ${tokens.sizes[20]};
  background-color: ${(p) => p.theme.backgroundContrast};
  height: calc(65% - ${tokens.sizes[20]});
`;

export const ToolBar = styled.div`
  width: ${tokens.sizes.full};
  display: flex;
  border-bottom: ${tokens.sizes[5]} solid ${(p) => p.theme.border};
  justify-content: space-between;
  align-items: center;

  padding-top: ${tokens.sizes[20]};
  padding-bottom: ${tokens.sizes[16]};
  padding-left: ${tokens.sizes[30]};
  padding-right: ${tokens.sizes[30]};

  ${mq(768)} {
    padding-top: ${tokens.sizes[40]};
    padding-bottom: ${tokens.sizes[32]};
    padding-left: ${tokens.sizes[60]};
    padding-right: ${tokens.sizes[60]};
  }

  h3 {
    margin-bottom: 0;
  }
`;

export const LeftSidePanel = styled.div<{ open?: boolean }>`
  background-color: ${(p) => p.theme.main};
  display: ${(p) => (p.open ? 'block' : 'none')};
  height: ${tokens.sizes.full};
  z-index: ${tokens.zIndices[500]};

  position: absolute;
  right: ${tokens.sizes[20]};

  height: 57.8%;
  border: none;

  p,
  button,
  h3 {
    color: ${(p) => p.theme.background};
  }

  padding: ${tokens.sizes[40]} ${tokens.sizes[30]};

  border-radius: ${tokens.sizes[20]};

  ${mq(992)} {
    background-color: ${(p) => p.theme.main};
    display: block;
    position: static;
    height: ${tokens.sizes.full};
  }
`;

export const BottomPanel = styled.div`
  height: calc(35% - ${tokens.sizes[20]});
  margin-bottom: ${tokens.sizes[20]};
`;
