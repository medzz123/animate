import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import themeDecorator from './themeDecorator';

addDecorator(withKnobs);
addDecorator(themeDecorator);

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
