import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Animate from './Animate';

export default {
  title: 'Pages/Animate',
  component: Animate,
} as Meta;

const Template: Story = (storyArguments) => (
  <ToastProvider>
    <Animate {...storyArguments} />
  </ToastProvider>
);

export const GenericInput = Template.bind({});
