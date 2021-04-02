import Box from '@components/Box';
import Export from '@components/Export';
import Frame from '@components/Frame';
import Load from '@components/Load';
import Target from '@components/Target';
import { NextPage } from 'next';
import React from 'react';

import { Container, ToolBar } from './Animate.styles';

const Animate: NextPage = () => {
  return (
    <Container>
      <ToolBar>
        <Load />
        <Box width={10} />
        <Target />
        <Box width={10} />
        <Export />
      </ToolBar>
      <Frame title="animation" width="200px" height="200px">
        <div style={{ width: 40, height: 40, backgroundColor: 'red' }} />
      </Frame>
    </Container>
  );
};

export default Animate;
