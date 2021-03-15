import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withNextRouter } from './nextRouterDecorator';
import themeDecorator from './themeDecorator';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return (
      <div>
        <img {...props} />
      </div>
    );
  },
});

addDecorator(withKnobs);
addDecorator(themeDecorator);
addDecorator(withNextRouter);

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
