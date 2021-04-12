import Box from '@components/Box';
import Button from '@components/Button';
import Control from '@components/Control';
import Controller from '@components/Controller';
import Export from '@components/Export';
import Frame from '@components/Frame';
import Load from '@components/Load';
import Target from '@components/Target';
import Timeline from '@components/Timeline';
import { NextPage } from 'next';
import React from 'react';

import { useAnimationState } from './Animate.hooks';
import {
  ArtboardSize,
  BottomPanel,
  Container,
  Content,
  ControlsPanel,
  FlexContainer,
  FrameContainer,
  LeftSidePanel,
  ToolBar,
} from './Animate.styles';

const Animate: NextPage = () => {
  const {
    scaling,
    artboardSize,
    editorVisible,
    toggleEditorVisibility,
    onLoad,
  } = useAnimationState();

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
          <Button onClick={toggleEditorVisibility}>Editor</Button>
        </Box>
      </ToolBar>

      <FlexContainer>
        <FrameContainer>
          <Content
            x={scaling.width}
            y={scaling.height}
            w={artboardSize.width}
            h={artboardSize.height}
            id="content"
          >
            <Frame title="animation" onLoad={onLoad}>
              <ArtboardSize
                w={artboardSize.width}
                h={artboardSize.height}
                s={scaling.scale}
              >
                <div
                  style={{ width: 40, height: 40, backgroundColor: 'red' }}
                />
              </ArtboardSize>
            </Frame>
          </Content>
        </FrameContainer>

        <LeftSidePanel closed={editorVisible}>
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
