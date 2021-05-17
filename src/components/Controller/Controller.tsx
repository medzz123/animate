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
import Box from '../Box';
import Flex from '../Box/Flex';
import { ControllerContainer, DeleteStep } from './Controller.styles';

const Controller: FunctionComponent = () => {
  const {
    currentStepState,
    onTransformChange,
    currentElement,
    currentStep,
    setWidth,
    setHeight,
    width,
    height,
    onPropertyChange,
    currentAnimationState,
    onAnimationStateChange,
    deleteCurrentStep,
  } = useAnimationState();

  return (
    <ControllerContainer data-testid="controller">
      <Flex justifyContent="space-between" marginBottom={24}>
        <h3>{currentElement}</h3>
        <h3>{currentStep}%</h3>
      </Flex>

      <Accordion title="Artboard" id="artboard-size" Icon={FaSign}>
        <AnimatableInput label="Width" value={width} onChange={setWidth} />
        <AnimatableInput label="Height" value={height} onChange={setHeight} />
      </Accordion>

      {currentStepState ? (
        <>
          <Accordion
            title="Transform"
            id="transform-properties"
            Icon={FaArrowsAlt}
          >
            <AnimatableInput
              label="Origin"
              placeholder="center center"
              name="transform-origin"
              value={currentStepState?.property?.['transform-origin'] || ''}
              onChange={onPropertyChange}
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
              value={currentStepState?.property?.perspective || ''}
              onChange={onPropertyChange}
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
              value={currentStepState?.property?.top || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Right"
              name="right"
              placeholder="0"
              value={currentStepState?.property?.right || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Bottom"
              name="bottom"
              placeholder="0"
              value={currentStepState?.property?.bottom || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Left"
              name="left"
              placeholder="0"
              value={currentStepState?.property?.left || ''}
              onChange={onPropertyChange}
            />
          </Accordion>
          <Accordion title="Color" id="color-properties" Icon={FaPalette}>
            <AnimatableInput
              label="Background"
              name="background-color"
              placeholder="blue"
              value={currentStepState?.property?.['background-color'] || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Opacity"
              name="opacity"
              placeholder="1"
              value={currentStepState?.property?.opacity || ''}
              onChange={onPropertyChange}
            />
          </Accordion>
          <Accordion title="Text" id="text-properties" Icon={FaSpellCheck}>
            <AnimatableInput
              label="Color"
              name="color"
              placeholder="red"
              value={currentStepState?.property?.color || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Font Size"
              name="font-size"
              placeholder="14px"
              value={currentStepState?.property?.['font-size'] || ''}
              onChange={onPropertyChange}
            />
          </Accordion>
          <Accordion
            title="Borders"
            id="border-properties"
            Icon={FaBorderStyle}
          >
            <AnimatableInput
              label="Border"
              name="border"
              placeholder="2px solid black"
              value={currentStepState?.property?.border || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Radius"
              name="border-radius"
              placeholder="50%"
              value={currentStepState?.property?.['border-radius'] || ''}
              onChange={onPropertyChange}
            />
            <AnimatableInput
              label="Box Shadow"
              name="box-shadow"
              placeholder="10px 5px 5px red"
              value={currentStepState?.property?.['box-shadow'] || ''}
              onChange={onPropertyChange}
            />
          </Accordion>
          <Accordion
            title="State"
            id="animation-state"
            Icon={MdSlowMotionVideo}
          >
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

          <Box marginBottom={24} />

          <DeleteStep type="button" onClick={deleteCurrentStep}>
            Delete Step
          </DeleteStep>
        </>
      ) : (
        <p>Select a step to edit</p>
      )}
    </ControllerContainer>
  );
};

export default Controller;
