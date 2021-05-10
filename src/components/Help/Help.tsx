import React, { FunctionComponent } from 'react';

import { useDialogContext } from '../../state/dialogs';
import Box from '../Box';
import Dialog from '../Dialog';
import { OrderedList } from './Help.styles';

const Help: FunctionComponent = () => {
  const { help, set } = useDialogContext();

  const close = () => {
    set({ field: 'help', value: false });
  };

  return (
    <Dialog label="Help" open={help} close={close}>
      <h3>How to use</h3>
      <OrderedList>
        <li>
          <p>Open Target and add your initial HTML and CSS</p>
        </li>
        <li>
          <p>
            Add new steps with the + button and modify the properties in the
            editor
          </p>
        </li>
        <li>
          <p>
            Sometimes animations can keep their old property if the new property
            is not set. You can clear them up by setting their initial values.
          </p>
        </li>
      </OrderedList>
      <Box height={20} />
    </Dialog>
  );
};

export default Help;
