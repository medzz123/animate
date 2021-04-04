import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Scale from './Scale';

export default {
  title: 'Pages/Scale',
  component: Scale,
} as Meta;

const Template: Story = (storyArguments) => <Scale {...storyArguments} />;

export const ScaleStory = Template.bind({});
