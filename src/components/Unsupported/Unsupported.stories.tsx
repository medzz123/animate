import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Unsupported from './Unsupported';

export default {
  title: 'Components/Unsupported',
  component: Unsupported,
} as Meta;

const Template: Story = (storyArguments) => <Unsupported {...storyArguments} />;

export const UnsupportedStory = Template.bind({});
