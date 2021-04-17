import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { VscClose } from 'react-icons/vsc';

import * as animations from '../../animations';
import { getLocalAnimations } from '../../utils/GetLocalAnimations';
import Box from '../Box';
import Flex from '../Box/Flex';
import Button from '../Button';
import Dialog from '../Dialog';
import { Close } from '../Dialog/Dialog.close';
import {
  DeleteAnimationButton,
  Item,
  List,
  NewAnimationInput,
  SelectAnimationButton,
} from './Load.styles';

const Load: FunctionComponent = () => {
  const [state] = useState(() => {
    return getLocalAnimations();
  });
  const [animationName, setAnimationName] = useState('');

  return (
    <Dialog label="Load">
      <h3>Your animations</h3>
      <p>Select from one of your animations</p>
      <List>
        {Object.keys(state.localAnimations).map((key) => (
          <Item key={`local-animation-${key}`}>
            <SelectAnimationButton
              onClick={() => {
                window.localStorage.setItem('current', key);
                location.reload();
              }}
            >
              {key.replace('animation-', '')}
            </SelectAnimationButton>
            <DeleteAnimationButton
              onClick={() => {
                if (window.localStorage.getItem('current') === key) {
                  window.localStorage.setItem('current', 'basic');
                }

                window.localStorage.removeItem(key);

                location.reload();
              }}
            >
              <VscClose size="20px" color="red" />
            </DeleteAnimationButton>
          </Item>
        ))}
      </List>

      <h3>Preset Animations</h3>
      <List>
        {Object.keys(animations).map((key) => (
          <Item key={`item-animation-${key}`}>
            <SelectAnimationButton
              onClick={() => {
                window.localStorage.setItem('current', key);
                location.reload();
              }}
            >
              {key}
            </SelectAnimationButton>
          </Item>
        ))}
      </List>

      <h3>New Animation</h3>

      <Flex>
        <NewAnimationInput
          value={animationName}
          onChange={(e) => setAnimationName(e.target.value)}
        />
        <Button
          onClick={() => {
            window.localStorage.setItem(
              'current',
              `animation-${animationName}`
            );
            window.localStorage.setItem(
              `animation-${animationName}`,
              JSON.stringify(animations.basic)
            );
            location.reload();
          }}
        >
          Create
        </Button>
      </Flex>
      <Box height={20} />
      <Close>Close</Close>
    </Dialog>
  );
};

export default Load;
