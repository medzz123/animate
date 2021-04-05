import Box from '@components/Box';
import Button from '@components/Button';
import Controller from '@components/Controller';
import Export from '@components/Export';
import Frame from '@components/Frame';
import Load from '@components/Load';
import Target from '@components/Target';
import debounce from 'lodash/debounce';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

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

const size = { w: 600, h: 400 };

const Animate: NextPage = () => {
  const [s, ss] = useState({ x: 0, y: 0, scale: 0 });

  const onLoad = () => {
    ss({
      x: document?.getElementById('container')?.clientWidth,
      y: document?.getElementById('container')?.clientHeight,
      scale: document?.getElementById('content')?.clientWidth / size.w,
    });
  };

  useEffect(() => {
    onLoad();

    window.onresize = debounce(() => {
      ss({
        x: document?.getElementById('container')?.clientWidth,
        y: document?.getElementById('container')?.clientHeight,
        scale: document?.getElementById('content')?.clientWidth / size.w,
      });
    }, 300);
  }, []);

  return (
    <Container>
      <ToolBar>
        <Load />
        <Box width={10} />
        <Target />
        <Box width={10} />
        <Export />
        <Box width={10} />
      </ToolBar>

      <FlexContainer>
        <FrameContainer>
          <Content x={s.x} y={s.y} w={size.w} h={size.h} id="content">
            <Frame title="animation" onLoad={onLoad}>
              <ArtboardSize w={size.w} h={size.h} s={s.scale}>
                <div
                  style={{ width: 40, height: 40, backgroundColor: 'red' }}
                />
              </ArtboardSize>
            </Frame>
          </Content>
        </FrameContainer>

        <LeftSidePanel>
          <Controller />
        </LeftSidePanel>
      </FlexContainer>

      <ControlsPanel>
        <Button>Controls</Button>
      </ControlsPanel>

      <BottomPanel>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
      </BottomPanel>
    </Container>
  );
};

export default Animate;
