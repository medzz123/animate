import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = (storyArguments) => <Button {...storyArguments} />;

export const ButtonStory = Template.bind({});
