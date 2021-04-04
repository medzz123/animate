import AnimatableInput from '@components/AnimatableInput';
import debounce from 'lodash/debounce';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import {
  BottomPanel,
  Container,
  Content,
  FlexContainer,
  FrameContainer,
  LeftSidePanel,
  TopBar,
} from './Scale.styles';

const Scale: NextPage = () => {
  const [s, ss] = useState({ x: 0, y: 0 });

  useEffect(() => {
    ss({
      x: document?.getElementById('container')?.clientWidth,
      y: document?.getElementById('container')?.clientHeight,
    });

    window.onresize = debounce(() => {
      ss({
        x: document?.getElementById('container')?.clientWidth,
        y: document?.getElementById('container')?.clientHeight,
      });
    }, 300);
  }, []);

  return (
    <Container>
      <TopBar>
        <button>Top Bar</button>
      </TopBar>
      <FlexContainer>
        <FrameContainer>
          <Content x={s.x} y={s.y}>
            <p>Hello, this page us Scale</p>
          </Content>
        </FrameContainer>

        <LeftSidePanel>
          <AnimatableInput label="hello" />
        </LeftSidePanel>
      </FlexContainer>

      <BottomPanel>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
        <p>Bottom Panel</p>
      </BottomPanel>
    </Container>
  );
};

export default Scale;
