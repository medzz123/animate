import { AnimatableState } from './TestingGrounds.models';

export const parseToCss = (state: AnimatableState['steps']) => {
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

export const parseAnimationState = (
  state: AnimatableState['animationState']
) => {
  let finalString = 'animation-name: animate;\n';

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
    let transformProperties = '';
    let normalProperties = '';

    const current = state.steps[state.step];

    for (const key in current.transform) {
      if (!current.transform[key]) {
        break;
      }
      transformProperties += `${key}(${current.transform[key]})`;
    }

    for (const key2 in current.normal) {
      if (!current.normal[key2]) {
        break;
      }
      normalProperties += `${key2}: ${current.normal[key2]};\n`;
    }

    return `
      animation: none;
      transform: ${transformProperties};
      ${normalProperties}
      `;
  }

  return '';
};
