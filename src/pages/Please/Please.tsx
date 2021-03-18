import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { highlight, languages } from 'prismjs/components/prism-core';
import React, { useState } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import styled, { StyleSheetManager } from 'styled-components';

import { Container, Content } from './Please.styles';

// const Editor = dynamic(() => import('../../components/Editor'), { ssr: false });

const Editor = dynamic(
  async () => {
    const editor = await import('react-simple-code-editor');
    import('prismjs/components/prism-clike');
    import('prismjs/components/prism-javascript');
    import('prismjs/themes/prism.css');
    return editor;
  },
  {
    ssr: false,
  }
);

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
  const [raw, setRaw] = useState(`.text-node {
    animation: animate 1500ms infinite;
  
    @keyframes animate {
      0% {
        transform: translateX(0);
      }
  
      50% {
        transform: translateX(150px);
      }
  
      100% {
        transform: translateX(0);
      }
    }
  }`);
  return (
    <Container>
      <Content>
        <p>Hello, this page us Please</p>
      </Content>
      <Editor
        value={raw}
        onValueChange={(code) => setRaw(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
      />
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
    </Container>
  );
};

export default Please;
