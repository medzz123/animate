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

const Export: FunctionComponent = () => {
  const { addToast } = useToasts();

  const { parsed, css, markup, nodes } = useAnimationState();

  const currentAnimationName = window.localStorage
    .getItem('current')
    .replace('animation-', '');

  const data = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
  
      <title>${currentAnimationName}</title>
      <meta name="description" content="Animating ${currentAnimationName}" />
  
      <style>
        body,
        html {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
  
        * {
          box-sizing: border-box;
        }

        ${css}
        ${parsed}
        ${nodes} { animation-play-state: running; }
      </style>
    </head>
  
    <body>${markup}</body>
  </html>
  `;

  return (
    <Dialog label="Export">
      <h3>Export to HTML</h3>
      <p>This will create a HTML file with animation.</p>

      <Box marginBottom={16}>
        <Button
          onClick={() => {
            fileDownload(data, `${currentAnimationName}.html`);
          }}
        >
          Export
        </Button>
      </Box>

      <h3>Raw HTML & CSS</h3>
      <Box marginBottom={16}>
        <Code>{data}</Code>
      </Box>
      <Box marginBottom={16}>
        <Button
          onClick={() => {
            copy(data, {
              onCopy: () => {
                addToast('Copied Successfully!', { appearance: 'success' });
              },
            });
          }}
        >
          Copy to clipboard
        </Button>
      </Box>
      <Close>Close</Close>
    </Dialog>
  );
};

export default Export;
