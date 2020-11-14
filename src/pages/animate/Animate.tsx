import AnimationBox from '@components/AnimationBox';
import Artboard from '@components/Artboard';
import ElementBox from '@components/ElementBox';
import PropertiesBox from '@components/PropertiesBox';
import { NextPage } from 'next';
import React from 'react';

import { Container, MainWrapper } from './Animate.styles';

const Animate: NextPage = () => {
  return (
    <Container>
      <MainWrapper>
        <ElementBox />
        <Artboard />
        <PropertiesBox />
      </MainWrapper>
      <AnimationBox />
    </Container>
  );
};

export default Animate;
