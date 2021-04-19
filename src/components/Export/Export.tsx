import copy from 'copy-to-clipboard';
import fileDownload from 'js-file-download';
import React, { FunctionComponent } from 'react';
import { useToasts } from 'react-toast-notifications';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Button from '../Button';
import Dialog from '../Dialog';
import { Close } from '../Dialog/Dialog.close';
import { Code } from './Export.styles';
import { getProcessedString } from './Export.utils';

const Export: FunctionComponent = () => {
  const { addToast } = useToasts();

  const { parsed, css, markup, nodes } = useAnimationState();

  const currentAnimationName = window.localStorage
    .getItem('current')
    .replace('animation-', '');

  return (
    <Dialog label="Export">
      <h3>Export to HTML</h3>
      <p>This will create a HTML file with animation.</p>

      <Box marginBottom={16}>
        <Button
          onClick={() => {
            fileDownload(
              getProcessedString({
                parsed,
                css,
                markup,
                nodes,
                currentAnimationName,
              }),
              `${currentAnimationName}.html`
            );
          }}
        >
          Export
        </Button>
      </Box>

      <h3>Raw HTML & CSS</h3>
      <Box marginBottom={16}>
        <Code>
          {getProcessedString({
            parsed,
            css,
            markup,
            nodes,
            currentAnimationName,
          })}
        </Code>
      </Box>
      <Box marginBottom={16}>
        <Button
          onClick={() => {
            copy(
              getProcessedString({
                parsed,
                css,
                markup,
                nodes,
                currentAnimationName,
              }),
              {
                onCopy: () => {
                  addToast('Copied Successfully!', { appearance: 'success' });
                },
              }
            );
          }}
        >
          Copy to clipboard
        </Button>
      </Box>
      <Box marginBottom={16}>
        <Close>Close</Close>
      </Box>
    </Dialog>
  );
};

export default Export;
