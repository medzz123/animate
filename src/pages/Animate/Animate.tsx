import Artboard from '@components/Artboard';
import { NextPage } from 'next';
import React from 'react';

import { Container, Row } from './Animate.styles';

const Animate: NextPage = () => {
  return (
    <Container>
      <Row>
        <Artboard />
      </Row>
    </Container>
  );
};

export default Animate;
