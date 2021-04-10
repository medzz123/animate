import Box from '@components/Box';
import Dialog from '@components/Dialog';
import { Close } from '@components/Dialog/Dialog.close';
import Editor from '@components/Editor';
import { useAnimationState } from '@pages/Animate/Animate.hooks';
import router from 'next/router';
import React, { FunctionComponent } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { TargetFallback } from './Target.fallback';

const Target: FunctionComponent = () => {
  const { handlers, state } = useAnimationState();
  return (
    <Dialog label="Target">
      <ErrorBoundary
        fallbackRender={TargetFallback}
        onReset={() => {
          router.reload();
        }}
      >
        <h3>Target Elements</h3>
        <p>Add the element you want animate with an ID attribute.</p>
        <Editor
          language="html"
          value={state.markup}
          onChange={handlers().onChangeMarkup}
        />
        <Box height={16} />

        <h3>Initial CSS</h3>
        <p>Initial CSS applied to your HTML elements.</p>
        <Editor
          language="scss"
          value={state.css}
          onChange={handlers().onChangeCss}
        />
        <Box marginTop={16}>
          <Close>Close</Close>
        </Box>
      </ErrorBoundary>
    </Dialog>
  );
};

export default Target;
