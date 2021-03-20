import AnimatableInput from '@components/AnimatableInput';
import Box from '@components/Box';
import Flex from '@components/Box/Flex';
import Button from '@components/Button';
import Frame from '@components/Frame';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import {
  useAnimationControls,
  useTestingGrounds,
} from './TestingGrounds.hooks';
import { Container, TestNode } from './TestingGrounds.styles';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

const TestingGrounds: NextPage = () => {
  const [initial, setInitial] = useState(
    `.test-node {
      width: 40px;
      height: 40px;
      background-color: red;
  }`
  );

  const [newStep, setNewStep] = useState(0);

  const {
    parsed,
    handlers,
    animatableProperties,
    currentProperties,
  } = useTestingGrounds();

  const { play, handlers: playHandlers } = useAnimationControls();

  return (
    <Container>
      <Flex marginBottom={20}>
        <Frame title="Artboard">
          <TestNode initial={initial} animations={parsed} play={play}>
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
          name="translate"
          value={currentProperties.translate || ''}
          onChange={handlers().onPropertyChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Rotate"
          name="rotate"
          placeholder="45 deg"
          value={currentProperties.rotate || ''}
          onChange={handlers().onPropertyChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Scale"
          name="scale"
          placeholder="1.5"
          value={currentProperties.scale || ''}
          onChange={handlers().onPropertyChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Skew"
          name="skew"
          placeholder="22deg"
          value={currentProperties.skew || ''}
          onChange={handlers().onPropertyChange}
        />
        <Box marginBottom={40} />
        <AnimatableInput
          label="New Step"
          placeholder="77"
          type="number"
          onChange={(event) => setNewStep(Number(event.target.value))}
        />
      </Box>
      <Box marginLeft={20} display="inline-flex" flexDirection="column">
        <p>Current step: {animatableProperties.step}%</p>
        <Box marginBottom={20}>
          {Object.keys(animatableProperties.steps).map((key) => (
            <button
              key={`location-${key}`}
              style={{ marginRight: 20 }}
              onClick={() => {
                handlers().changeCurrentStep(Number(key));
              }}
            >
              Step {key}%
            </button>
          ))}
        </Box>
        <Box display="inline-flex" flexDirection="column">
          <Flex></Flex>
        </Box>
      </Box>
      <Flex marginBottom={20}>
        <Button
          onClick={() => {
            playHandlers().toggle();
          }}
        >
          {play ? 'Pause' : 'Play'}
        </Button>

        <Button
          style={{ marginLeft: 20 }}
          onClick={() => {
            handlers().createStep(newStep);
          }}
        >
          Add New Step
        </Button>

        <Button
          style={{ marginLeft: 20 }}
          onClick={() => {
            handlers().deleteStep();
          }}
        >
          Delete Current Step
        </Button>
      </Flex>
    </Container>
  );
};

export default TestingGrounds;
