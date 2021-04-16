import { Element } from '../../state/animation';

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
