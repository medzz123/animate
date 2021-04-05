import Box from '@components/Box';
import Editor from '@components/Editor';
import Popover from '@components/Popover';
import { Close } from '@components/Popover/Popover.close';
import router from 'next/router';
import React, { FunctionComponent } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { TargetFallback } from './Target.fallback';
import { TargetContainer } from './Target.styles';

const Target: FunctionComponent = () => {
  return (
    <TargetContainer data-testid="target">
      <Popover label="Target">
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
            value="<div>Hi</div>"
            onChange={() => {
              // hi
            }}
          />
          <Box height={16} />

          <h3>Initial CSS</h3>
          <p>Initial CSS applied to your HTML elements.</p>
          <Editor
            language="scss"
            value={`
          div {
            background-color: red;
          }
          `}
            onChange={() => {
              // hi
            }}
          />
          <Box marginTop={16}>
            <Close>Close</Close>
          </Box>
        </ErrorBoundary>
      </Popover>
    </TargetContainer>
  );
};

export default Target;
