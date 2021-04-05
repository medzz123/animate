import Accordion from '@components/Accordion';
import AnimatableInput from '@components/AnimatableInput';
import Flex from '@components/Box/Flex';
import React, { FunctionComponent } from 'react';
import { BiMove } from 'react-icons/bi';

import { ControllerContainer } from './Controller.styles';

const Controller: FunctionComponent = () => {
  return (
    <ControllerContainer data-testid="controller">
      <Flex justifyContent="space-between">
        <h3>CSS Properties</h3>
        <h3>15%</h3>
      </Flex>
      <Accordion title="Transform" id="transform-properties" Icon={BiMove}>
        <AnimatableInput label="Translate" />
        <AnimatableInput label="Rotate" />
        <AnimatableInput label="Scale" />
        <AnimatableInput label="Skew" />
      </Accordion>
      <Accordion title="Position" id="position-properties" Icon={BiMove}>
        <AnimatableInput label="Translate" />
        <AnimatableInput label="Rotate" />
        <AnimatableInput label="Scale" />
        <AnimatableInput label="Skew" />
      </Accordion>
      <Accordion title="Color" id="color-properties" Icon={BiMove}>
        <AnimatableInput label="Translate" />
        <AnimatableInput label="Rotate" />
        <AnimatableInput label="Scale" />
        <AnimatableInput label="Skew" />
      </Accordion>
      <Accordion title="Text" id="text-properties" Icon={BiMove}>
        <AnimatableInput label="Translate" />
        <AnimatableInput label="Rotate" />
        <AnimatableInput label="Scale" />
        <AnimatableInput label="Skew" />
      </Accordion>
    </ControllerContainer>
  );
};

export default Controller;
