import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const ControlCloseButton = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  top: -30px;
  right: -20px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  color: white;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
`;

export const AnimationContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: white;
  height: calc(65% - 20px);
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 5px solid #f0f0f0;
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

export const ControllerContainer = styled.div`
  display: flex;

  position: relative;
`;

export const LeftSidePanel = styled.div<{ open?: boolean }>`
  background-color: #313c60;
  display: ${(p) => (p.open ? 'block' : 'none')};
  height: 100%;
  z-index: ${tokens.zIndices[500]};

  position: absolute;
  right: 20px;

  height: 57.8%;
  border: none;

  p,
  button,
  h3 {
    color: white;
  }

  padding: 40px 30px;

  border-radius: 20px;

  ${mq(992)} {
    background-color: #313c60;
    display: block;
    position: static;
    height: ${tokens.sizes.full};
  }
`;

export const ControlsPanel = styled.div`
  width: ${tokens.sizes.full};
  height: ${tokens.sizes[44]};
`;

export const BottomPanel = styled.div`
  height: calc(35% - 20px);
  margin-bottom: 20px;
`;
