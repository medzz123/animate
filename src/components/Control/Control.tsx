import React, { FunctionComponent } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Flex from '../Box/Flex';
import Button from '../Button';
import { ControlContainer } from './Control.styles';

const Control: FunctionComponent = () => {
  const {
    currentStep,
    deleteCurrentElement,
    deleteCurrentStep,
    currentElement,
  } = useAnimationState();

  return (
    <ControlContainer data-testid="control">
      <Flex>
        <Button>Add Frame</Button>
        <Box width={8} />
        <Button onClick={deleteCurrentStep}>Delete Step: {currentStep}</Button>
        <Box width={8} />
        <Button onClick={deleteCurrentElement}>
          Delete Element: {currentElement}
        </Button>
      </Flex>

      <Flex>
        <Button size="icon">
          <FaPlay />
        </Button>
        <Box width={8} />
        <Button size="icon">
          <FaPause />
        </Button>
        <Box width={8} />
        <Button size="icon">
          <FaStop />
        </Button>
      </Flex>
    </ControlContainer>
  );
};

export default Control;
