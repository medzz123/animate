import Dialog from '@components/Dialog';
import { Close } from '@components/Dialog/Dialog.close';
import { tokens } from '@theme/tokens';
import React from 'react';
import { FunctionComponent } from 'react';
import { VscClose } from 'react-icons/vsc';

import { DeleteAnimationButton, Item, List } from './Load.styles';

const Load: FunctionComponent = () => {
  return (
    <Dialog label="Load">
      <h3>Your animations</h3>
      <p>Select from one of your animations</p>
      <List>
        <Item>
          Animation One
          <DeleteAnimationButton>
            <VscClose size={tokens.sizes[20]} color="red" />
          </DeleteAnimationButton>
        </Item>
        <Item>
          Animation Two
          <DeleteAnimationButton>
            <VscClose size={tokens.sizes[20]} color="red" />
          </DeleteAnimationButton>
        </Item>
      </List>

      <h3>Preset Animations</h3>
      <List>
        <Item>
          Car
          <DeleteAnimationButton>
            <VscClose size={tokens.sizes[20]} color="red" />
          </DeleteAnimationButton>
        </Item>
        <Item>
          Card
          <DeleteAnimationButton>
            <VscClose size={tokens.sizes[20]} color="red" />
          </DeleteAnimationButton>
        </Item>
      </List>
      <Close>Close</Close>
    </Dialog>
  );
};

export default Load;
