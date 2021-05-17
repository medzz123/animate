import {
  AnimationState,
  Element,
} from '../../state/Animation/animation.models';
import { tokens } from '../../theme/tokens';
import { defaultProperties } from './ParseAnimations.defaults';

const parseElementAnimation = ({
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

  /**
   * Parses the current step in case the animation is paused
   * to display the property values
   */
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

  /** Loops through all the frames and parses the animations */
  for (const step in steps) {
    let transformAnimation = '';
    let propertyAnimation = '';
    const transforms = steps[step].transform;
    const properties = steps[step].property;

    /**
     * It separates the transform properties from the normal properties as
     * they are parsed differently
     */
    for (const transformProperty in transforms) {
      transformAnimation += ` ${transformProperty}(${
        transforms[transformProperty]?.length > 0
          ? transforms[transformProperty]
          : defaultProperties[transformProperty]
      })`;
    }

    /**
     * Parses the normal properties
     */
    for (const property in properties) {
      if (!properties[property]) {
        propertyAnimation += `${property}: ${defaultProperties[property]};\n`;
        continue;
      }
      propertyAnimation += `${property}: ${properties[property]};\n`;
    }

    /**
     * Checks if any transform property has been added if so add the animation
     */
    if (transformAnimation.length > 0) {
      transformAnimation = `transform: ${transformAnimation};`;
    }

    /**
     * Applies the animations to the correct step
     */
    stepAnimations += `
      ${step}% {
        ${propertyAnimation}
        ${transformAnimation}
      }
    `;
  }

  /**
   * Adds the animation controls
   */
  for (const control in animationState) {
    if (animationState[control]) {
      parsedControls += `${control}: ${animationState[control]};\n`;
    }
  }

  /**
   * Combines all generated code
   * Applies an outline to the current active element if the
   * animation is paused
   */
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

/**
 * Takes all the current elements in the animation, the global play state
 * and the active element
 */
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
    /**
     * For every element its parses the properties to animation code
     */
    const parsedAnimations = parseElementAnimation({
      element: elements[element],
      name: element,
      playState,
      activeElement,
    });

    /**
     * It gets the animation controls and properties in different strings
     * so they can be controlled independently
     */
    mergeControls += parsedAnimations.controls;
    mergeKeyframes += parsedAnimations.keyframes;
  }

  return { mergeControls, mergeKeyframes };
};
