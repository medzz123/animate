import Flex from '@components/Box/Flex';
import Frame from '@components/Frame';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { Container, TestNode } from './Animate.styles';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

const Animate: NextPage = () => {
  const [raw, setRaw] = useState(
    `.test-node {
      width: 40px;
      height: 40px;
      background-color: red;
      
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
    }`
  );

  return (
    <Container>
      <Flex>
        <Frame title="Artboard">
          <TestNode raw={raw}>
            <div className="test-node" />
          </TestNode>
        </Frame>

        <MonacoEditor
          height="400px"
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
      </Flex>
    </Container>
  );
};

export default Animate;
