import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Control from './Control';

export default {
  title: 'Components/Control',
  component: Control,
} as Meta;

const Template: Story = (storyArguments) => <Control {...storyArguments} />;

export const ControlStory = Template.bind({});
