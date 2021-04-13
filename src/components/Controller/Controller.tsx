import React, { FunctionComponent } from 'react';
import {
  FaArrowsAlt,
  FaBorderStyle,
  FaDiceD6,
  FaPalette,
  FaRulerCombined,
  FaSign,
  FaSpellCheck,
} from 'react-icons/fa';

import { useAnimationState } from '../../pages/Animate/Animate.hooks';
import Accordion from '../Accordion';
import AnimatableInput from '../AnimatableInput';
import Flex from '../Box/Flex';
import { ControllerContainer } from './Controller.styles';

const Controller: FunctionComponent = () => {
  const {
    state,
    handlers,
    artboardSize,
    handleArtboardSize,
  } = useAnimationState();

  const currentProperties =
    state.elements[state.element].steps[state.elements[state.element].step];

  return (
    <ControllerContainer data-testid="controller">
      <Flex justifyContent="space-between">
        <h3>{state.element}</h3>
        <h3>{state.elements[state.element].step}%</h3>
      </Flex>
      <Accordion title="Transform" id="transform-properties" Icon={FaArrowsAlt}>
        <AnimatableInput
          label="Origin"
          placeholder="center center"
          name="transform-origin"
          value={currentProperties?.normal?.['transform-origin'] || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Translate"
          name="translate"
          placeholder="0px, 0px"
          value={currentProperties?.transform?.translate || ''}
          onChange={handlers().onTransformChange}
        />
        <AnimatableInput
          label="Rotate"
          name="rotate"
          placeholder="0 deg"
          value={currentProperties?.transform?.rotate || ''}
          onChange={handlers().onTransformChange}
        />
        <AnimatableInput
          label="Scale"
          name="scale"
          placeholder="1"
          value={currentProperties?.transform?.scale || ''}
          onChange={handlers().onTransformChange}
        />
        <AnimatableInput
          label="Skew"
          name="skew"
          placeholder="0 deg"
          value={currentProperties?.transform?.skew || ''}
          onChange={handlers().onTransformChange}
        />
      </Accordion>
      <Accordion title="3D" id="3d-properties" Icon={FaDiceD6}>
        <AnimatableInput
          label="Perspective"
          name="perspective"
          placeholder="100px"
          value={currentProperties?.normal?.perspective || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Translate3d"
          name="translate3d"
          placeholder="42px, -62px, -135px"
          value={currentProperties?.transform?.translate3d || ''}
          onChange={handlers().onTransformChange}
        />
        <AnimatableInput
          label="Scale3d"
          name="scale3d"
          placeholder="1.3, 1.3, 1.3"
          value={currentProperties?.transform?.scale3d || ''}
          onChange={handlers().onTransformChange}
        />
        <AnimatableInput
          label="Rotate3d"
          name="rotate3d"
          placeholder="1, 1, 1, 45deg"
          value={currentProperties?.transform?.rotate3d || ''}
          onChange={handlers().onTransformChange}
        />
      </Accordion>
      <Accordion
        title="Position"
        id="position-properties"
        Icon={FaRulerCombined}
      >
        <AnimatableInput
          label="Top"
          name="top"
          placeholder="0"
          value={currentProperties?.normal?.top || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Right"
          name="right"
          placeholder="0"
          value={currentProperties?.normal?.right || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Bottom"
          name="bottom"
          placeholder="0"
          value={currentProperties?.normal?.bottom || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Left"
          name="left"
          placeholder="0"
          value={currentProperties?.normal?.left || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Color" id="color-properties" Icon={FaPalette}>
        <AnimatableInput
          label="Background"
          name="background-color"
          placeholder="blue"
          value={currentProperties?.normal?.['background-color'] || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Opacity"
          name="opacity"
          placeholder="1"
          value={currentProperties?.normal?.opacity || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Text" id="text-properties" Icon={FaSpellCheck}>
        <AnimatableInput
          label="Color"
          name="color"
          placeholder="red"
          value={currentProperties?.normal?.color || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Font Size"
          name="font-size"
          placeholder="14px"
          value={currentProperties?.normal?.['font-size'] || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Borders" id="border-properties" Icon={FaBorderStyle}>
        <AnimatableInput
          label="Border"
          name="border"
          placeholder="2px solid black"
          value={currentProperties?.normal?.border || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Radius"
          name="border-radius"
          placeholder="50%"
          value={currentProperties?.normal?.['border-radius'] || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Box Shadow"
          name="box-shadow"
          placeholder="10px 5px 5px red"
          value={currentProperties?.normal?.['box-shadow'] || ''}
          onChange={handlers().onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Artboard" id="artboard-size" Icon={FaSign}>
        <AnimatableInput
          label="Width"
          value={artboardSize.width}
          onChange={(event) => {
            handleArtboardSize({ width: Number(event.target.value) });
          }}
        />
        <AnimatableInput
          label="Height"
          value={artboardSize.height}
          onChange={(event) => {
            handleArtboardSize({ height: Number(event.target.value) });
          }}
        />
      </Accordion>
    </ControllerContainer>
  );
};

export default Controller;
