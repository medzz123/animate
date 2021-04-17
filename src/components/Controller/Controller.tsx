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
import { MdSlowMotionVideo } from 'react-icons/md';

import { useAnimationState } from '../../state/Animation/animation';
import Accordion from '../Accordion';
import AnimatableInput from '../AnimatableInput';
import Flex from '../Box/Flex';
import { ControllerContainer } from './Controller.styles';

const Controller: FunctionComponent = () => {
  const {
    currentStepState,
    onTransformChange,
    onAnimationPropertyChange,
    currentElement,
    currentStep,
    setWidth,
    setHeight,
    width,
    height,
    currentAnimationState,
    onAnimationStateChange,
  } = useAnimationState();

  return (
    <ControllerContainer data-testid="controller">
      <Flex justifyContent="space-between">
        <h3>{currentElement}</h3>
        <h3>{currentStep}%</h3>
      </Flex>
      <Accordion title="Transform" id="transform-properties" Icon={FaArrowsAlt}>
        <AnimatableInput
          label="Origin"
          placeholder="center center"
          name="transform-origin"
          value={currentStepState?.normal?.['transform-origin'] || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Translate"
          name="translate"
          placeholder="0px, 0px"
          value={currentStepState?.transform?.translate || ''}
          onChange={onTransformChange}
        />
        <AnimatableInput
          label="Rotate"
          name="rotate"
          placeholder="0 deg"
          value={currentStepState?.transform?.rotate || ''}
          onChange={onTransformChange}
        />
        <AnimatableInput
          label="Scale"
          name="scale"
          placeholder="1"
          value={currentStepState?.transform?.scale || ''}
          onChange={onTransformChange}
        />
        <AnimatableInput
          label="Skew"
          name="skew"
          placeholder="0 deg"
          value={currentStepState?.transform?.skew || ''}
          onChange={onTransformChange}
        />
      </Accordion>
      <Accordion title="3D" id="3d-properties" Icon={FaDiceD6}>
        <AnimatableInput
          label="Perspective"
          name="perspective"
          placeholder="100px"
          value={currentStepState?.normal?.perspective || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Translate3d"
          name="translate3d"
          placeholder="42px, -62px, -135px"
          value={currentStepState?.transform?.translate3d || ''}
          onChange={onTransformChange}
        />
        <AnimatableInput
          label="Scale3d"
          name="scale3d"
          placeholder="1.3, 1.3, 1.3"
          value={currentStepState?.transform?.scale3d || ''}
          onChange={onTransformChange}
        />
        <AnimatableInput
          label="Rotate3d"
          name="rotate3d"
          placeholder="1, 1, 1, 45deg"
          value={currentStepState?.transform?.rotate3d || ''}
          onChange={onTransformChange}
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
          value={currentStepState?.normal?.top || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Right"
          name="right"
          placeholder="0"
          value={currentStepState?.normal?.right || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Bottom"
          name="bottom"
          placeholder="0"
          value={currentStepState?.normal?.bottom || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Left"
          name="left"
          placeholder="0"
          value={currentStepState?.normal?.left || ''}
          onChange={onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Color" id="color-properties" Icon={FaPalette}>
        <AnimatableInput
          label="Background"
          name="background-color"
          placeholder="blue"
          value={currentStepState?.normal?.['background-color'] || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Opacity"
          name="opacity"
          placeholder="1"
          value={currentStepState?.normal?.opacity || ''}
          onChange={onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Text" id="text-properties" Icon={FaSpellCheck}>
        <AnimatableInput
          label="Color"
          name="color"
          placeholder="red"
          value={currentStepState?.normal?.color || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Font Size"
          name="font-size"
          placeholder="14px"
          value={currentStepState?.normal?.['font-size'] || ''}
          onChange={onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="Borders" id="border-properties" Icon={FaBorderStyle}>
        <AnimatableInput
          label="Border"
          name="border"
          placeholder="2px solid black"
          value={currentStepState?.normal?.border || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Radius"
          name="border-radius"
          placeholder="50%"
          value={currentStepState?.normal?.['border-radius'] || ''}
          onChange={onAnimationPropertyChange}
        />
        <AnimatableInput
          label="Box Shadow"
          name="box-shadow"
          placeholder="10px 5px 5px red"
          value={currentStepState?.normal?.['box-shadow'] || ''}
          onChange={onAnimationPropertyChange}
        />
      </Accordion>
      <Accordion title="State" id="animation-state" Icon={MdSlowMotionVideo}>
        <AnimatableInput
          label="Duration"
          name="animation-duration"
          placeholder="2s"
          value={currentAnimationState['animation-duration'] || ''}
          onChange={onAnimationStateChange}
        />
        <AnimatableInput
          label="Timing"
          name="animation-timing-function"
          placeholder="ease"
          value={currentAnimationState['animation-timing-function'] || ''}
          onChange={onAnimationStateChange}
        />
        <AnimatableInput
          label="Delay"
          name="animation-delay"
          placeholder="ease"
          value={currentAnimationState['animation-delay'] || ''}
          onChange={onAnimationStateChange}
        />
        <AnimatableInput
          label="Fill"
          name="animation-fill-mode"
          placeholder="none"
          value={currentAnimationState['animation-fill-mode'] || ''}
          onChange={onAnimationStateChange}
        />
        <AnimatableInput
          label="Direction"
          name="animation-direction"
          placeholder="normal"
          value={currentAnimationState['animation-direction'] || ''}
          onChange={onAnimationStateChange}
        />
        <AnimatableInput
          label="Count"
          name="animation-iteration-count"
          placeholder="infinite"
          value={currentAnimationState['animation-iteration-count'] || ''}
          onChange={onAnimationStateChange}
        />
      </Accordion>
      <Accordion title="Artboard" id="artboard-size" Icon={FaSign}>
        <AnimatableInput label="Width" value={width} onChange={setWidth} />
        <AnimatableInput label="Height" value={height} onChange={setHeight} />
      </Accordion>
    </ControllerContainer>
  );
};

export default Controller;
