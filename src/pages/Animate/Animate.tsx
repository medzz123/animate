import AnimationBox from '@components/AnimationBox';
import Artboard from '@components/Artboard';
import ElementBox from '@components/ElementBox';
import PropertiesBox from '@components/PropertiesBox';
import ToolBar from '@components/ToolBar';
import { NextPage } from 'next';
import React from 'react';

import { Container, Row } from './Animate.styles';

const Animate: NextPage = () => {
  return (
    <Container>
      <Row>
        <Artboard />
        <PropertiesBox />
      </Row>
      <ToolBar />

      <Row>
        <ElementBox />
        <AnimationBox />
      </Row>
    </Container>
  );
};

export default Animate;
