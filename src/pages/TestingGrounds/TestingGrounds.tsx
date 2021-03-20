import AnimatableInput from '@components/AnimatableInput';
import Box from '@components/Box';
import Flex from '@components/Box/Flex';
import Button from '@components/Button';
import Frame from '@components/Frame';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { useTestingGrounds } from './TestingGrounds.hooks';
import { Container, TestNode } from './TestingGrounds.styles';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

const TestingGrounds: NextPage = () => {
  const [initial, setInitial] = useState(
    `
    width: 40px;
    height: 40px;
    background-color: red;
    animation: animate 1500ms infinite;
    `
  );

  const [location, setLocation] = useState(0);
  const [newLocation, setNewLocation] = useState(0);

  const { parsed, handlers, animatableProperties } = useTestingGrounds();

  return (
    <Container>
      <Flex marginBottom={20}>
        <Frame title="Artboard">
          <TestNode initial={initial} animations={parsed}>
            <div className="test-node" />
          </TestNode>
        </Frame>

        <MonacoEditor
          height="400px"
          width="600px"
          language="scss"
          theme="vs-dark"
          value={initial}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={(c: string) => setInitial(c)}
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
      <Box
        marginBottom={20}
        display="inline-flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <AnimatableInput
          label="Translate"
          placeholder="50px, 100px"
          value={animatableProperties[location].translate || ''}
          onChange={(event) =>
            handlers().onTranslateChange(event.target.value, location)
          }
        />
        <Box marginBottom={10} />
        <AnimatableInput label="Rotate" placeholder="45 deg" />
        <Box marginBottom={10} />
        <AnimatableInput label="Scale" placeholder="1.5" />
        <Box marginBottom={10} />
        <AnimatableInput label="Skew" placeholder="22deg" />
      </Box>
      <Box marginLeft={20} display="inline-flex" flexDirection="column">
        <Box marginBottom={20}>
          {Object.keys(animatableProperties).map((key) => (
            <button
              key={`location-${key}`}
              style={{ marginLeft: 20 }}
              onClick={() => {
                setLocation(Number(key));
              }}
            >
              Location {key}%
            </button>
          ))}
        </Box>
        <Box display="inline-flex" flexDirection="column">
          <AnimatableInput
            label="Location Input"
            placeholder="77"
            type="number"
            onChange={(event) => setNewLocation(Number(event.target.value))}
          />
          <Box marginBottom={20} />
          <Button
            type="button"
            size="large"
            onClick={() => {
              handlers().createLocation(newLocation);
            }}
          >
            Add New Location
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TestingGrounds;
