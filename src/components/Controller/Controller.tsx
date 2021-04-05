import Accordion from '@components/Accordion';
import AnimatableInput from '@components/AnimatableInput';
import Flex from '@components/Box/Flex';
import React, { FunctionComponent } from 'react';
import {
  FaArrowsAlt,
  FaBorderStyle,
  FaDiceD6,
  FaPalette,
  FaRulerCombined,
  FaSpellCheck,
} from 'react-icons/fa';

import { ControllerContainer } from './Controller.styles';

const Controller: FunctionComponent = () => {
  return (
    <ControllerContainer data-testid="controller">
      <Flex justifyContent="space-between">
        <h3>Red Box</h3>
        <h3>15%</h3>
      </Flex>
      <Accordion title="Transform" id="transform-properties" Icon={FaArrowsAlt}>
        <AnimatableInput label="Origin" placeholder="center center" />
        <AnimatableInput label="Translate" />
        <AnimatableInput label="Rotate" />
        <AnimatableInput label="Scale" />
        <AnimatableInput label="Skew" />
      </Accordion>
      <Accordion title="3D" id="3d-properties" Icon={FaDiceD6}>
        <AnimatableInput label="Perspective" />
        <AnimatableInput label="Translate3d" />
        <AnimatableInput label="Scale3d" />
        <AnimatableInput label="Rotate3d" />
      </Accordion>
      <Accordion
        title="Position"
        id="position-properties"
        Icon={FaRulerCombined}
      >
        <AnimatableInput label="Top" />
        <AnimatableInput label="Right" />
        <AnimatableInput label="Bottom" />
        <AnimatableInput label="Left" />
      </Accordion>
      <Accordion title="Color" id="color-properties" Icon={FaPalette}>
        <AnimatableInput label="Background" />
        <AnimatableInput label="Opacity" />
      </Accordion>
      <Accordion title="Text" id="text-properties" Icon={FaSpellCheck}>
        <AnimatableInput label="Color" />
        <AnimatableInput label="Font Size" />
      </Accordion>
      <Accordion title="Borders" id="border-properties" Icon={FaBorderStyle}>
        <AnimatableInput label="Border" />
        <AnimatableInput label="Radius" />
        <AnimatableInput label="Box Shadow" />
        <AnimatableInput label="Outline" />
      </Accordion>
    </ControllerContainer>
  );
};

export default Controller;
