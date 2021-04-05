import Box from '@components/Box';
import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { Close } from '@components/Dialog/Dialog.close';
import copy from 'copy-to-clipboard';
import React, { FunctionComponent } from 'react';
import { useToasts } from 'react-toast-notifications';

import { Code } from './Export.styles';

const text = `<div id="node"></div>`;

const Export: FunctionComponent = () => {
  const { addToast } = useToasts();
  return (
    <Dialog label="Export">
      <h3>Export to HTML</h3>
      <p>This will create a HTML file with animation.</p>

      <Box marginBottom={16}>
        <Button>Export</Button>
      </Box>

      <h3>Export to REACT</h3>
      <p>Select from one of your animations</p>

      <Box marginBottom={16}>
        <Button>Export</Button>
      </Box>

      <h3>Raw HTML & CSS</h3>

      <Box marginBottom={16}>
        <Code>{text}</Code>
      </Box>
      <Box marginBottom={16}>
        <Button
          onClick={() => {
            copy(text, {
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
