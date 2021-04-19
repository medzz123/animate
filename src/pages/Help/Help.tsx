import React from 'react';

import Motion from '../../components/Motion';
import { Container, Content } from './Help.styles';

const Help: React.FC = () => {
  return (
    <Motion>
      <Container>
        <Content>
          <p>Hello, this page us Help</p>
        </Content>
      </Container>
    </Motion>
  );
};

export default Help;
