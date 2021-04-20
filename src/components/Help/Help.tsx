import React, { FunctionComponent } from 'react';

import Box from '../Box';
import Dialog from '../Dialog';
import { Close } from '../Dialog/Dialog.close';
import { OrderedList } from './Help.styles';

const Help: FunctionComponent = () => {
  return (
    <Dialog label="Help">
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
      <Close>Close</Close>
    </Dialog>
  );
};

export default Help;
