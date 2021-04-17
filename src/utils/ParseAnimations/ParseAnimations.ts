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
    let normalAnimation = '';
    const transforms = steps[step].transform;
    const normal = steps[step].normal;

    for (const transformProperty in transforms) {
      if (transforms[transformProperty]) {
        transformAnimation += ` ${transformProperty}(${transforms[transformProperty]})`;
      }
    }

    for (const normalProperty in normal) {
      if (normal[normalProperty]) {
        normalAnimation += `${normal}: ${normal[normalProperty]};\n`;
      }
    }

    if (transformAnimation.length > 0) {
      transformAnimation = `transform: ${transformAnimation};`;
    }

    stepAnimations += `
      ${step}% {
        ${normalAnimation}
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

export const parseToCss = (state: Element['steps']) => {
  let finalString = ``;

  for (const key in state) {
    const properties = state[key];
    let parsedTransform = '';
    let parsedNormal = '';

    for (const property in properties.transform) {
      if (properties.transform[property]) {
        parsedTransform += `${property}(${properties.transform[property]})`;
      }
    }

    for (const property2 in properties.normal) {
      if (properties.normal[property2]) {
        parsedNormal += `${property2}: ${properties.normal[property2]};\n`;
      }
    }

    const build = `${key}% {
          ${parsedNormal}
          ${parsedTransform.length > 0 ? `transform: ${parsedTransform};` : ''}
        }`;

    finalString += build;
  }

  return `
        @keyframes animate {
            ${finalString}
        }
      `;
};
