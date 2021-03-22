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
    `.test-node {
      width: 40px;
      height: 40px;
      background-color: red;
      display: inline-block;
  }`
  );

  const [newStep, setNewStep] = useState(0);

  const { parsed, handlers, state, currentProperties } = useTestingGrounds();

  const [resetKey, setResetKey] = useState('frame-reset-key');

  if (!state.loaded) {
    return <p>loading ...</p>;
  }

  return (
    <Container>
      <Flex marginBottom={20}>
        <Frame title="Artboard" key={resetKey}>
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

      <Box
        marginBottom={40}
        marginLeft={40}
        display="inline-flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <AnimatableInput
          label="Duration"
          placeholder="750ms"
          name="animation-duration"
          value={state.animationState['animation-duration'] || ''}
          onChange={handlers().onAnimationStateChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Timing"
          placeholder="ease"
          name="animation-timing-function"
          value={state.animationState['animation-timing-function'] || ''}
          onChange={handlers().onAnimationStateChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Delay"
          placeholder="750ms"
          name="animation-delay"
          value={state.animationState['animation-delay'] || ''}
          onChange={handlers().onAnimationStateChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Fill Mode"
          placeholder="forwards"
          name="animation-fill-mode"
          value={state.animationState['animation-fill-mode'] || ''}
          onChange={handlers().onAnimationStateChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Direction"
          placeholder="reverse"
          name="animation-direction"
          value={state.animationState['animation-direction'] || ''}
          onChange={handlers().onAnimationStateChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Iteration Count"
          placeholder="2"
          name="animation-iteration-count"
          value={state.animationState['animation-iteration-count'] || ''}
          onChange={handlers().onAnimationStateChange}
        />
        <Box marginBottom={10} />
      </Box>
      <Box
        marginLeft={40}
        display="inline-flex"
        flexDirection="column"
        flexWrap="wrap"
      >
        <p>
          Current step:{' '}
          {state.step ?? state.animationState['animation-play-state']}
        </p>
        <Box marginBottom={20}>
          {Object.keys(state.steps).map((key) => (
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
        <Button onClick={handlers().toggleAnimationPlayState}>
          {state.animationState['animation-play-state'] === 'paused'
            ? 'Play'
            : 'Pause'}
        </Button>

        <Button
          style={{ marginLeft: 20 }}
          onClick={() => {
            handlers().createStep(newStep);
          }}
        >
          Add New Step
        </Button>

        <Button style={{ marginLeft: 20 }} onClick={handlers().deleteStep}>
          Delete Current Step
        </Button>

        <Button
          style={{ marginLeft: 20 }}
          onClick={() => {
            setResetKey('frame-off');
            handlers().pauseAnimation();
            setTimeout(() => {
              setResetKey('frame-reset-key');
            }, 50);
          }}
        >
          Rest Animation
        </Button>
      </Flex>
    </Container>
  );
};

export default TestingGrounds;
