import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import Providers from './Providers';

addDecorator(withKnobs);
addDecorator(Providers);

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
