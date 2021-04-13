import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import TestingGrounds from './TestingGrounds';

export default {
  title: 'Pages/TestingGrounds',
  component: TestingGrounds,
} as Meta;

const Template: Story = (storyArguments) => (
  <TestingGrounds {...storyArguments} />
);

export const TestingGroundsStory = Template.bind({});
