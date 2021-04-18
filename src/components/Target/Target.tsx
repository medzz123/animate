import React, { FunctionComponent } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Dialog from '../Dialog';
import { Close } from '../Dialog/Dialog.close';
import Editor from '../Editor';
import { TargetFallback } from './Target.fallback';

const Target: FunctionComponent = () => {
  const {
    markup,
    css,
    onChangeMarkup,
    onChangeCss,
    mergeElements,
  } = useAnimationState();

  const openOpenChange = (state: boolean) => {
    if (!state) {
      mergeElements();
    }
  };

  return (
    <Dialog label="Target" onOpenChange={openOpenChange}>
      <ErrorBoundary
        fallbackRender={TargetFallback}
        onReset={() => {
          location.reload();
        }}
      >
        <h3>Target Elements</h3>
        <p>Add the element you want animate with an ID attribute.</p>
        <Editor language="html" value={markup} onChange={onChangeMarkup} />
        <Box height={16} />

        <h3>Initial CSS</h3>
        <p>Initial CSS applied to your HTML elements.</p>
        <Editor language="scss" value={css} onChange={onChangeCss} />
        <Box marginTop={16}>
          <Close>Close</Close>
        </Box>
      </ErrorBoundary>
    </Dialog>
  );
};

export default Target;
