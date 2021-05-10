import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import Artboard from '../../components/Artboard';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Control from '../../components/Control';
import Controller from '../../components/Controller';
import Export from '../../components/Export';
import Help from '../../components/Help';
import Load from '../../components/Load';
import Menu from '../../components/Menu';
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
  const { pausePlayState, move } = useAnimationState();
  const [resetKey, setResetKey] = useState('reset-key');

  const [dialogState, setDialogState] = useState({
    load: false,
    target: false,
    label: false,
    hep: false,
  });

  const toggleDialog = (dialog: 'load' | 'target' | 'label' | 'help') => {
    setDialogState((s) => ({ ...s, [dialog]: !s[dialog] }));
  };

  const handleReset = () => {
    setResetKey('frame-off');
    pausePlayState();
    setTimeout(() => {
      setResetKey('reset-key');
    }, 50);
  };

  useHotkeys('left', () => {
    move('x', -5);
  });

  useHotkeys('right', () => {
    move('x', 5);
  });

  useHotkeys('up', () => {
    move('y', -5);
  });

  useHotkeys('down', () => {
    move('y', 5);
  });

  return (
    <Container>
      <ToolBar>
        <Menu
          items={[
            {
              label: 'Load',
              onClick: () => toggleDialog('load'),
            },
            {
              label: 'Target',
              onClick: () => toggleDialog('target'),
            },
            {
              label: 'Export',
              onClick: () => toggleDialog('label'),
            },
            {
              label: 'Help',
              onClick: () => toggleDialog('help'),
            },
          ]}
        />
        <Load open={dialogState.load} />
        <Box width={10} />
        <Target />
        <Box width={10} />
        <Export />
        <Box width={10} />
        <Help />
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
  );
};

export default Animate;
