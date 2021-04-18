import {
  AnimationState,
  Element,
} from '../../state/Animation/animation.models';

export const parseElementAnimation = (element: Element, name: string) => {
  const steps = element.steps;
  const animationState = element.animationState;
  let parsedControls = '';
  let stepAnimations = '';

  for (const step in steps) {
    let transformAnimation = '';
    let propertyAnimation = '';
    const transforms = steps[step].transform;
    const properties = steps[step].property;

    for (const transformProperty in transforms) {
      if (transforms[transformProperty]) {
        transformAnimation += ` ${transformProperty}(${transforms[transformProperty]})`;
      }
    }

    for (const property in properties) {
      if (!properties[property]) {
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

  return `
    #${name} {
      animation-name: ${name}Animation;
      ${parsedControls}
      
      @keyframes ${name}Animation {
        ${stepAnimations}
      }
    }
  `;
};

export const parseElements = (elements: AnimationState['elements']) => {
  let parsed = '';

  for (const element in elements) {
    parsed += parseElementAnimation(elements[element], element);
  }

  return parsed;
};
