import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Edit } from 'react-iconly';

import Artboard from '../../components/Artboard';
import Box from '../../components/Box';
import Flex from '../../components/Box/Flex';
import Button from '../../components/Button';
import Controller from '../../components/Controller';
import Export from '../../components/Export';
import Help from '../../components/Help';
import Load from '../../components/Load';
import Menu from '../../components/Menu';
import Target from '../../components/Target';
import Timeline from '../../components/Timeline';
import { useAnimationState } from '../../state/Animation/animation';
import { useDialogContext } from '../../state/dialogs';
import { useEditorState } from '../../state/editor';
import {
  AnimationContainer,
  BottomPanel,
  Container,
  LeftSidePanel,
  ToolBar,
} from './Animate.styles';

const Animate: React.FunctionComponent = () => {
  const { toggle, open } = useEditorState();
  const { pausePlayState, move } = useAnimationState();
  const [resetKey, setResetKey] = useState('reset-key');

  const { set } = useDialogContext();

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
      <AnimationContainer>
        <Box width="full">
          <ToolBar>
            <Flex>
              <h3 style={{ fontSize: 16 }}>Animation Name</h3>
              <Box width={16} />
              <Edit size="small" />
            </Flex>
            {/* <Menu
              items={[
                {
                  label: 'Load',
                  onClick: () => set({ field: 'load', value: true }),
                },
                {
                  label: 'Target',
                  onClick: () => set({ field: 'target', value: true }),
                },
                {
                  label: 'Export',
                  onClick: () => set({ field: 'exp', value: true }),
                },
                {
                  label: 'Help',
                  onClick: () => set({ field: 'help', value: true }),
                },
              ]}
            /> */}
            <Flex>
              <Load />
              <Box width={40} />
              <Target />
              <Box width={40} />
              <Export />
              <Box width={40} />
              <Help />
              <Box width={{ 375: 40, 992: 0 }} />
              <Box display={{ 375: 'block', 992: 'none' }}>
                <Button onClick={toggle}>Editor</Button>
              </Box>
            </Flex>
          </ToolBar>
          <Artboard key={resetKey} handleReset={handleReset} />
        </Box>

        <LeftSidePanel closed={open}>
          <Controller />
        </LeftSidePanel>
      </AnimationContainer>

      <BottomPanel>
        <Timeline />
      </BottomPanel>
    </Container>
  );
};

export default Animate;
