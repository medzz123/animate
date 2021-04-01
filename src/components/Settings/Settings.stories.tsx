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
    darkMode={{
      value: false,
      enable: noop,
      disable: noop,
      toggle: noop,
    }}
    {...storyArguments}
  />
);

export const SettingsStory = Template.bind({});
