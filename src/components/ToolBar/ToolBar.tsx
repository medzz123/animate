import { Row } from '@components/Row';
import { Pause, PlayArrow, Stop } from '@material-ui/icons';
import React from 'react';

import { ToolBarContainer } from './ToolBar.styles';

const AnimationBox: React.FunctionComponent = () => {
  return (
    <ToolBarContainer>
      <button>Add Step</button>
      <Row>
        <button>Some button</button>
        <button>Some button</button>
        <button>Some button</button>
        <button>Some button</button>
      </Row>
      <Row>
        <Pause />
        <PlayArrow />
        <Stop />
      </Row>
    </ToolBarContainer>
  );
};

export default AnimationBox;
