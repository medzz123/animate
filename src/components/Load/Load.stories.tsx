import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Load from './Load';

export default {
  title: 'Components/Load',
  component: Load,
} as Meta;

const Template: Story = (storyArguments) => <Load {...storyArguments} />;

export const LoadStory = Template.bind({});
