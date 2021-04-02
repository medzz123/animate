import Box from '@components/Box';
import Popover from '@components/Popover';
import { Close } from '@radix-ui/react-popover';
import copy from 'copy-to-clipboard';
import React, { FunctionComponent } from 'react';
import { useToasts } from 'react-toast-notifications';

import { Code, ExportContainer } from './Export.styles';

const text = `<div id="node"></div>`;

const Export: FunctionComponent = () => {
  const { addToast } = useToasts();
  return (
    <ExportContainer data-testid="export">
      <Popover label="Export">
        <h3>Export to HTML</h3>
        <p>This will create a HTML file with animation.</p>

        <Box marginBottom={16}>
          <button>Export</button>
        </Box>

        <h3>Export to REACT</h3>
        <p>Select from one of your animations</p>

        <Box marginBottom={16}>
          <button>Export</button>
        </Box>

        <h3>Raw HTML & CSS</h3>

        <Box marginBottom={16}>
          <Code>{text}</Code>
        </Box>
        <Box marginBottom={16}>
          <button
            onClick={() => {
              copy(text, {
                onCopy: () => {
                  addToast('Copied Successfully!', { appearance: 'success' });
                },
              });
            }}
          >
            Copy to clipboard
          </button>
        </Box>

        <Close>Close</Close>
      </Popover>
    </ExportContainer>
  );
};

export default Export;
