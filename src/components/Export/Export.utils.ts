import { htmlTemplate } from './Export.templates';

export const getProcessedString = ({
  currentAnimationName,
  css,
  parsed,
  nodes,
  markup,
}) => {
  const template = htmlTemplate({
    currentAnimationName,
    css,
    parsed,
    nodes,
    markup,
  });

  return template;
};
