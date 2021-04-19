import htmlParser from 'prettier/parser-html';
import cssParser from 'prettier/parser-postcss';
import prettier from 'prettier/standalone';

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

  return prettier.format(template, {
    parser: 'html',
    plugins: [htmlParser, cssParser],
  });
};
