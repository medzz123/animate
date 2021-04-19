import React, { useState } from 'react';

import Artboard from '../../components/Artboard';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Control from '../../components/Control';
import Controller from '../../components/Controller';
import Export from '../../components/Export';
import Load from '../../components/Load';
import Motion from '../../components/Motion';
import Target from '../../components/Target';
import Timeline from '../../components/Timeline';
import { useAnimationState } from '../../state/Animation/animation';
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
  const { pausePlayState } = useAnimationState();
  const [resetKey, setResetKey] = useState('reset-key');

  const handleReset = () => {
    setResetKey('frame-off');
    pausePlayState();
    setTimeout(() => {
      setResetKey('reset-key');
    }, 50);
  };

  return (
    <Motion>
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
          <Artboard key={resetKey} />
          <LeftSidePanel closed={open}>
            <Controller />
          </LeftSidePanel>
        </FlexContainer>

        <ControlsPanel>
          <Control handleReset={handleReset} />
        </ControlsPanel>

        <BottomPanel>
          <Timeline />
        </BottomPanel>
      </Container>
    </Motion>
  );
};

export default Animate;
