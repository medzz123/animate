import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { Plus } from 'react-iconly';
import { VscClose } from 'react-icons/vsc';

import * as animations from '../../animations';
import { useAnimationState } from '../../state/Animation/animation';
import { useDialogContext } from '../../state/dialogs';
import { getLocalAnimations } from '../../utils/GetLocalAnimations';
import Box from '../Box';
import Button from '../Button';
import Dialog from '../Dialog';
import {
  DeleteAnimationButton,
  Item,
  List,
  NewAnimationInput,
  SelectAnimationButton,
  UploadButton,
} from './Load.styles';

const Load: FunctionComponent = () => {
  const [state] = useState(() => {
    return getLocalAnimations();
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      setSelectedFile(reader.result);
    };

    reader.onerror = function () {
      setSelectedFile(null);
    };
  };

  const { load, set } = useDialogContext();

  const close = () => {
    set({ field: 'load', value: false });
  };

  const setOpen = () => {
    set({ field: 'load', value: true });
  };

  const { state: currentState } = useAnimationState();

  const [animationName, setAnimationName] = useState('');
  const [toNewAnimation, setToNewAnimation] = useState('');

  const currentAnimation = window.localStorage.getItem('current');

  return (
    <Dialog
      label="Load"
      Icon={Plus}
      button={true}
      setOpen={setOpen}
      open={load}
      close={close}
    >
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
                <VscClose />
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
      <Box>
        <NewAnimationInput
          value={animationName}
          onChange={(e) => setAnimationName(e.target.value)}
        />
        <Box height={20} />
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
      </Box>

      <Box height={20} />

      <h3>Save current</h3>
      <p>Current animation will be saved with a new name</p>
      <Box marginBottom={20}>
        <NewAnimationInput
          value={toNewAnimation}
          onChange={(e) => setToNewAnimation(e.target.value)}
        />
        <Box height={20} />
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
      </Box>

      <h3>Load animation file</h3>
      <p>
        The new animation will be loaded and your current animation will be lost
        if its not saved. NOTE: If an animation has the name local it will be
        overwritten.
      </p>

      <UploadButton
        type="file"
        name="file"
        accept=".json"
        onChange={changeHandler}
      />

      <Box height={20} />

      <Button
        // @ts-ignore
        disabled={!selectedFile}
        onClick={() => {
          window.localStorage.setItem('current', `animation-local`);
          window.localStorage.setItem(`animation-local`, selectedFile);
          location.reload();
        }}
      >
        Load animation
      </Button>

      <Box height={20} />
    </Dialog>
  );
};

export default Load;
