import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { VscClose } from 'react-icons/vsc';

import * as animations from '../../animations';
import { useAnimationState } from '../../state/Animation/animation';
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

const Load: FunctionComponent<{ open: boolean }> = (props) => {
  const [state] = useState(() => {
    return getLocalAnimations();
  });

  const { state: currentState } = useAnimationState();

  const [animationName, setAnimationName] = useState('');
  const [toNewAnimation, setToNewAnimation] = useState('');

  const currentAnimation = window.localStorage.getItem('current');

  return (
    <Dialog label="Load" open={props.open}>
      <h2>Editing: {currentAnimation.replace('animation-', '')}</h2>
      {!currentAnimation.includes('animation-') && (
        <p>
          Presets animations will not save your changes, to continue working
          from this animation use the save current feature.
        </p>
      )}
      <h3>Your animations</h3>
      <p>Select from one of your animations</p>
      <List>
        {Object.keys(state.localAnimations)
          .filter((animation) => animation !== currentAnimation)
          .map((key) => (
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
      <p>Basic animation will be created on it</p>
      <Flex>
        <NewAnimationInput
          value={animationName}
          onChange={(e) => setAnimationName(e.target.value)}
        />
        <Button
          // @ts-ignore
          disabled={animationName.length < 3}
          onClick={() => {
            if (animationName.length > 1) {
              window.localStorage.setItem(
                'current',
                `animation-${animationName}`
              );
              window.localStorage.setItem(
                `animation-${animationName}`,
                JSON.stringify(animations.basic)
              );
              location.reload();
            }
          }}
        >
          Create
        </Button>
      </Flex>

      <Box height={20} />

      <h3>Save current</h3>
      <p>Current animation will be saved with a new name</p>
      <Flex>
        <NewAnimationInput
          value={toNewAnimation}
          onChange={(e) => setToNewAnimation(e.target.value)}
        />
        <Button
          // @ts-ignore
          disabled={toNewAnimation.length < 3}
          onClick={() => {
            window.localStorage.setItem(
              'current',
              `animation-${toNewAnimation}`
            );
            window.localStorage.setItem(
              `animation-${toNewAnimation}`,
              JSON.stringify(currentState)
            );
            location.reload();
          }}
        >
          Save
        </Button>
      </Flex>
      <Box height={20} />
      <Close>Close</Close>
    </Dialog>
  );
};

export default Load;
