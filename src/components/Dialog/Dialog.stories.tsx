import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as Meta;

const Template: Story = (storyArguments) => (
  <Dialog label="Try me" {...storyArguments} />
);

export const PopoverStory = Template.bind({});
