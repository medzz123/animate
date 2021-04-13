import React, { FunctionComponent } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';

import Box from '../Box';
import Flex from '../Box/Flex';
import Button from '../Button';
import { ControlContainer } from './Control.styles';

const Control: FunctionComponent = () => {
  return (
    <ControlContainer data-testid="control">
      <Button>Add Frame</Button>
      <div>
        <Button>Duration</Button>
      </div>
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
