import { AlternateEmail } from '@material-ui/icons';
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

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'ugendo bugendo',
  leftIcon: <AlternateEmail />,
  rightIcon: <AlternateEmail />,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: 'secondary',
  children: 'ugendo bugendo',
  leftIcon: <AlternateEmail />,
  rightIcon: <AlternateEmail />,
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  variant: 'primary',
  size: 'large',
  children: 'ugendo bugendo',
  leftIcon: <AlternateEmail />,
  rightIcon: <AlternateEmail />,
};
