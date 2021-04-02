import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Popover from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta;

const Template: Story = (storyArguments) => (
  <Popover label="Try me" {...storyArguments} />
);

export const PopoverStory = Template.bind({});
