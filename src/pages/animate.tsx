import AnimationBox from '@components/AnimationBox';
import Artboard from '@components/Artboard';
import ElementBox from '@components/ElementBox';
import PropertiesBox from '@components/PropertiesBox';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 51px);
  width: 100vw;
`;

const MainWrapper = styled.div`
  display: flex;
  height: calc(100vh - 51px - 250px);
`;

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
