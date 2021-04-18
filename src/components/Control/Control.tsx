import React, { FunctionComponent, useState } from 'react';
import { FaPause, FaPlay, FaPlus, FaStop } from 'react-icons/fa';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Flex from '../Box/Flex';
import Button from '../Button';
import { ControlProps } from './Control.models';
import { ControlContainer, NewFrameInput } from './Control.styles';

const Control: FunctionComponent<ControlProps> = (props) => {
  const { handleReset } = props;
  const {
    currentStep,
    playState,
    deleteCurrentStep,
    togglePlayState,
    addStep,
  } = useAnimationState();
  const [newStep, setNewStep] = useState('');

  return (
    <ControlContainer data-testid="control">
      <Flex>
        <NewFrameInput
          maxLength={3}
          value={newStep}
          onChange={(event) => {
            setNewStep(event.target.value.replace(/[^0-9]/g, ''));
          }}
        />
        <Button
          size="icon"
          onClick={() => {
            addStep(Number(newStep));
          }}
        >
          <FaPlus size={12} />
        </Button>
        <Box width={8} />
        <Button onClick={deleteCurrentStep}>Delete {currentStep}</Button>
      </Flex>

      <Flex>
        <Button size="icon" onClick={togglePlayState}>
          {playState === 'paused' ? (
            <FaPause size={12} />
          ) : (
            <FaPlay size={12} />
          )}
        </Button>
        <Box width={8} />
        <Button size="icon" onClick={handleReset}>
          <FaStop size={12} />
        </Button>
      </Flex>
    </ControlContainer>
  );
};

export default Control;
