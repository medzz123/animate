import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Display from './Display';

export default {
  title: 'Components/Display',
  component: Display,
} as Meta;

const Template: Story = (storyArguments) => (
  <Display animationKey="hello" {...storyArguments} />
);

export const DisplayStory = Template.bind({});
