import Popover from '@components/Popover';
import { Close } from '@components/Popover/Popover.close';
import { tokens } from '@theme/tokens';
import React from 'react';
import { FunctionComponent } from 'react';
import { VscClose } from 'react-icons/vsc';

import {
  DeleteAnimationButton,
  Item,
  List,
  LoadContainer,
} from './Load.styles';

const Load: FunctionComponent = () => {
  return (
    <LoadContainer data-testid="load">
      <Popover label="Load">
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
      </Popover>
    </LoadContainer>
  );
};

export default Load;
