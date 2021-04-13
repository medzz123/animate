import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Target from './Target';

export default {
  title: 'Components/Target',
  component: Target,
} as Meta;

const Template: Story = (storyArguments) => <Target {...storyArguments} />;

export const TargetStory = Template.bind({});
