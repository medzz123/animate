import { AnimatableState } from './TestingGrounds.models';

export const parseToCss = (state: AnimatableState['steps']) => {
  let finalString = ``;

  for (const key in state) {
    const properties = state[key];
    let parsedProperties = '';

    for (const property in properties) {
      if (properties[property]) {
        parsedProperties += `${property}(${properties[property]})`;
      }
    }

    const build = `${key}% {
          transform: ${parsedProperties};
      }`;

    if (parsedProperties.length) {
      finalString += build;
    }
  }

  return `
      @keyframes animate {
          ${finalString}
      }
    `;
};

export const parseAnimationState = (
  state: AnimatableState['animationState']
) => {
  let finalString = '';

  for (const option in state) {
    finalString += `${option}: ${state[option]};\n`;
  }

  return finalString;
};

export const parseCurrentStepCss = (state: AnimatableState) => {
  if (
    state.step !== undefined &&
    state.animationState['animation-play-state'] === 'paused'
  ) {
    let finalString = '';

    const current = state.steps[state.step];

    for (const key in current) {
      if (!current[key]) {
        break;
      }
      finalString += `${key}(${current[key]})`;
    }

    return `
      animation: none;
      transform: ${finalString};`;
  }

  return '';
};
