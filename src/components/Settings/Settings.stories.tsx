import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Settings from './Settings';

export default {
  title: 'Components/Settings',
  component: Settings,
} as Meta;

const noop = () => {
  // Nothing
};

const Template: Story = (storyArguments) => (
  <Settings
    themeController={{
      theme: {
        background: '#232946',
        headline: '#fffffe',
        paragraph: '#b8c1ec',
        button: '#eebbc3',
        buttonText: '#232946',
      },
      state: false,
      toggleTheme: noop,
      mounted: true,
    }}
    {...storyArguments}
  />
);

export const SettingsStory = Template.bind({});
