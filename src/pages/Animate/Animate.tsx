import React from 'react';

import Artboard from '../../components/Artboard';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Control from '../../components/Control';
import Controller from '../../components/Controller';
import Export from '../../components/Export';
import Load from '../../components/Load';
import Target from '../../components/Target';
import Timeline from '../../components/Timeline';
import { useEditorState } from '../../state/editor';
import {
  BottomPanel,
  Container,
  ControlsPanel,
  FlexContainer,
  LeftSidePanel,
  ToolBar,
} from './Animate.styles';

const Animate: React.FunctionComponent = () => {
  const { toggle, open } = useEditorState();
  return (
    <Container>
      <ToolBar>
        <Load />
        <Box width={10} />
        <Target />
        <Box width={10} />
        <Export />
        <Box width={10} />
        <Box display={{ 375: 'block', 992: 'none' }}>
          <Button onClick={toggle}>Editor</Button>
        </Box>
      </ToolBar>

      <FlexContainer>
        <Artboard />
        <LeftSidePanel closed={open}>
          <Controller />
        </LeftSidePanel>
      </FlexContainer>

      <ControlsPanel>
        <Control />
      </ControlsPanel>

      <BottomPanel>
        <Timeline />
      </BottomPanel>
    </Container>
  );
};

export default Animate;
