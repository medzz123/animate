import { NextPage } from 'next';
import React, { useState } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import styled, { StyleSheetManager } from 'styled-components';

import { Container, Content } from './Please.styles';

export const TestNode = styled.div.attrs({ className: 'text-node' })`
  width: 40px;
  height: 40px;
  background-color: red;
`;

const AnimationStyles = styled.div<{
  raw: string;
}>`
  ${(p) => p.raw}
`;

const Please: NextPage = () => {
  const [raw, setRaw] = useState(
    '.text-node {\n  animation: animate 1500ms infinite;\n\n  @keyframes animate {\n    0% {\n      transform: translateX(0);\n    }\n\n    50% {\n      transform: translateX(150px);\n    }\n\n    100% {\n      transform: translateX(0);\n    }\n  }\n}'
  );
  return (
    <Container>
      <Content>
        <p>Hello, this page us Please</p>
      </Content>
      <Frame>
        <FrameContextConsumer>
          {(frameContext) => (
            <StyleSheetManager target={frameContext.document.head}>
              <React.Fragment>
                <AnimationStyles raw={raw}>
                  <TestNode />
                </AnimationStyles>
              </React.Fragment>
            </StyleSheetManager>
          )}
        </FrameContextConsumer>
      </Frame>
      <textarea
        rows={25}
        cols={50}
        value={raw}
        onChange={(event) => {
          console.log('Event', JSON.stringify(event.target.value));
          setRaw(event.target.value);
        }}
      />
    </Container>
  );
};

export default Please;
