import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import styled, { StyleSheetManager } from 'styled-components';

import { Container, Content } from './Please.styles';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

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
      <MonacoEditor
        height="600px"
        width="600px"
        language="scss"
        theme="vs-dark"
        value={raw}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={(c) => setRaw(c)}
        editorDidMount={() => {
          // @ts-ignore
          window.MonacoEnvironment.getWorkerUrl = (
            _: unknown,
            label: string
          ) => {
            if (label === 'json') return '/_next/static/json.worker.js';
            if (label === 'css') return '/_next/static/css.worker.js';
            if (label === 'html') return '/_next/static/html.worker.js';
            if (label === 'scss') return '/_next/static/ts.worker.js';
            return '/_next/static/editor.worker.js';
          };
        }}
      />
    </Container>
  );
};

export default Please;
