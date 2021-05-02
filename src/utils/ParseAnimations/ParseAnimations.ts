import {
  AnimationState,
  Element,
} from '../../state/Animation/animation.models';
import { tokens } from '../../theme/tokens';
import { defaultProperties } from './ParseAnimations.defaults';

export const parseElementAnimation = ({
  element,
  name,
  playState,
  activeElement,
}: {
  element: Element;
  name: string;
  playState?: string;
  activeElement?: string;
}) => {
  const steps = element.steps;
  const animationState = element.animationState;
  let parsedControls = '';
  let stepAnimations = '';

  const currentStep = element.step;

  let currentStepAnimation = '';
  let currentStepAnimationTransforms = '';

  const currentStepTransform = steps[currentStep]?.transform;
  const currentStepProperties = steps[currentStep]?.property;

  for (const currentStepTransformProperty in currentStepTransform) {
    currentStepAnimationTransforms += ` ${currentStepTransformProperty}(${
      currentStepTransform[currentStepTransformProperty]?.length > 0
        ? currentStepTransform[currentStepTransformProperty]
        : defaultProperties[currentStepTransformProperty]
    })`;
  }

  for (const currentStepPropertiesProperty in currentStepProperties) {
    if (!currentStepProperties[currentStepPropertiesProperty]) {
      currentStepAnimation += `${currentStepPropertiesProperty}: ${defaultProperties[currentStepPropertiesProperty]};\n`;
      continue;
    }

    currentStepAnimation += `${currentStepPropertiesProperty}: ${currentStepProperties[currentStepPropertiesProperty]};\n`;
  }

  if (currentStepAnimationTransforms.length > 0) {
    currentStepAnimation = `transform: ${currentStepAnimationTransforms};`;
  }

  for (const step in steps) {
    let transformAnimation = '';
    let propertyAnimation = '';
    const transforms = steps[step].transform;
    const properties = steps[step].property;

    for (const transformProperty in transforms) {
      transformAnimation += ` ${transformProperty}(${
        transforms[transformProperty]?.length > 0
          ? transforms[transformProperty]
          : defaultProperties[transformProperty]
      })`;
    }

    for (const property in properties) {
      if (!properties[property]) {
        propertyAnimation += `${property}: ${defaultProperties[property]};\n`;
        continue;
      }
      propertyAnimation += `${property}: ${properties[property]};\n`;
    }

    if (transformAnimation.length > 0) {
      transformAnimation = `transform: ${transformAnimation};`;
    }

    stepAnimations += `
      ${step}% {
        ${propertyAnimation}
        ${transformAnimation}
      }
    `;
  }

  for (const control in animationState) {
    if (animationState[control]) {
      parsedControls += `${control}: ${animationState[control]};\n`;
    }
  }

  return {
    controls: `
    #${name} {
      ${
        playState === 'paused'
          ? `${currentStepAnimation} ${
              name === activeElement &&
              `outline: 5px solid #4169e1${tokens.alpha[25]};`
            };`
          : `animation-name: ${name}Animation;${parsedControls}`
      }
    }`,
    keyframes: `
    @keyframes ${name}Animation {
      ${stepAnimations}
    }
    `,
  };
};

export const parseElements = ({
  elements,
  playState,
  activeElement,
}: {
  elements: AnimationState['elements'];
  playState?: string;
  activeElement?: string;
}) => {
  let mergeControls = '';
  let mergeKeyframes = '';

  for (const element in elements) {
    const parsedAnimations = parseElementAnimation({
      element: elements[element],
      name: element,
      playState,
      activeElement,
    });

    mergeControls += parsedAnimations.controls;
    mergeKeyframes += parsedAnimations.keyframes;
  }

  return { mergeControls, mergeKeyframes };
};
