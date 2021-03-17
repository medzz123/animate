import Flex from '@components/Box/Flex';
import Frame from '@components/Frame';
import { NextPage } from 'next';
import React, { useState } from 'react';

import { Container, TestNode } from './Animate.styles';

const Animate: NextPage = () => {
  const [raw, setRaw] = useState('');
  return (
    <Container>
      <Flex>
        <Frame title="Artboard">
          <TestNode raw={raw} />
          <div style={{ width: 40, height: 40, backgroundColor: 'red' }} />
        </Frame>
        <textarea onChange={(event) => setRaw(event.target.value)} />
      </Flex>
    </Container>
  );
};

export default Animate;
