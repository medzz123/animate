import copy from 'copy-to-clipboard';
import fileDownload from 'js-file-download';
import { FunctionComponent } from 'react';
import { Upload } from 'react-iconly';
import { useToasts } from 'react-toast-notifications';

import { useAnimationState } from '../../state/Animation/animation';
import { useDialogContext } from '../../state/dialogs';
import Box from '../Box';
import Button from '../Button';
import Dialog from '../Dialog';
import { Code } from './Export.styles';
import { reactTemplate } from './Export.templates';
import { getProcessedString } from './Export.utils';

const Export: FunctionComponent = () => {
  const { addToast } = useToasts();

  const { parsed, css, markup, nodes, state } = useAnimationState();

  const currentAnimationName = window.localStorage
    .getItem('current')
    .replace('animation-', '');

  const { exp, set } = useDialogContext();

  const close = () => {
    set({ field: 'exp', value: false });
  };

  const setOpen = () => {
    set({ field: 'exp', value: true });
  };

  return (
    <Dialog
      label="Export"
      Icon={Upload}
      setOpen={setOpen}
      open={exp}
      close={close}
    >
      <h2>Export to HTML</h2>
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
          Export HTML
        </Button>
      </Box>

      <h3>Export to React</h3>
      <p>
        This will create a React file with the animation as a styled component.
      </p>

      <Box marginBottom={16}>
        <Button
          onClick={() => {
            fileDownload(
              reactTemplate({
                parsed,
                css,
                markup,
                nodes,
              }),
              `${currentAnimationName}.jsx`
            );
          }}
        >
          Export React
        </Button>
      </Box>

      <h3>Export as animation file</h3>
      <p>You can later load this animation in a different device.</p>

      <Box marginBottom={16}>
        <Button
          onClick={() => {
            fileDownload(
              `${JSON.stringify(state)}`,
              `${currentAnimationName}.json`
            );
          }}
        >
          Export Animation File
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
      <Box marginBottom={16}></Box>
    </Dialog>
  );
};

export default Export;
