import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Button from './Button';
import { ButtonProps } from './Button.models';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (storyArguments) => (
  <Button {...storyArguments} />
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Hello',
};
