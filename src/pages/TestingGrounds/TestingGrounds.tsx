import AnimatableInput from '@components/AnimatableInput';
import Box from '@components/Box';
import Flex from '@components/Box/Flex';
import Frame from '@components/Frame';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { useTestingGrounds } from './TestingGrounds.hooks';
import { Container, ParentNode } from './TestingGrounds.styles';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

function download(filename: string, text: string) {
  const pom = document.createElement('a');
  pom.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  pom.setAttribute('download', filename);

  if (document.createEvent) {
    const event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

const TestingGrounds: NextPage = () => {
  const [initial, setInitial] = useState(
    `#node {
      width: 40px;
      height: 40px;
      background-color: red;
      display: inline-block;
    }`
  );

  const [newStep, setNewStep] = useState(0);

  const {
    parsed,
    handlers,
    separateParse,
    state,
    currentProperties,
    jsx,
  } = useTestingGrounds();

  const [resetKey, setResetKey] = useState('frame-reset-key');

  if (!state.loaded) {
    return <p>loading ...</p>;
  }

  return (
    <Container>
      <Flex marginBottom={20}>
        <Frame title="Artboard" key={resetKey}>
          <ParentNode initial={initial} animations={parsed}>
            {jsx}
          </ParentNode>
        </Frame>

        <MonacoEditor
          height="400px"
          width="300px"
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
        <Box width={20} />
        <MonacoEditor
          height="400px"
          width="300px"
          language="html"
          theme="vs-dark"
          value={state.markup}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={handlers().onChangeMarkup}
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
          onFocus={handlers().handleFocus}
          value={currentProperties.transform?.translate || ''}
          onChange={handlers().onTransformChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Rotate"
          name="rotate"
          placeholder="45 deg"
          value={currentProperties.transform?.rotate || ''}
          onChange={handlers().onTransformChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Scale"
          name="scale"
          placeholder="1.5"
          value={currentProperties.transform?.scale || ''}
          onChange={handlers().onTransformChange}
        />
        <Box marginBottom={10} />
        <AnimatableInput
          label="Skew"
          name="skew"
          placeholder="22deg"
          value={currentProperties.transform?.skew || ''}
          onChange={handlers().onTransformChange}
        />
        <AnimatableInput
          label="Background Color"
          name="background-color"
          placeholder="blue"
          value={currentProperties.normal?.['background-color'] || ''}
          onChange={handlers().onPropertyChange}
        />
        <AnimatableInput
          label="Opacity"
          name="opacity"
          placeholder="1"
          value={currentProperties.normal?.opacity || ''}
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
        <button onClick={handlers().toggleAnimationPlayState}>
          {state.animationState['animation-play-state'] === 'paused'
            ? 'Play'
            : 'Pause'}
        </button>

        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            handlers().createStep(newStep);
          }}
        >
          Add New Step
        </button>

        <button style={{ marginLeft: 20 }} onClick={handlers().deleteStep}>
          Delete Current Step
        </button>

        <button
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
        </button>

        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            download(
              'animation.html',
              `<!DOCTYPE html><html>
              <head>
              <style>
              ${initial}
              #node {
                ${separateParse.a}
              }

              ${separateParse.b}
              </style>
              </head>
              <body>
              ${state.markup}
              </body>
              </html>`
            );
          }}
        >
          Export HTML and CSS
        </button>
      </Flex>
    </Container>
  );
};

export default TestingGrounds;
