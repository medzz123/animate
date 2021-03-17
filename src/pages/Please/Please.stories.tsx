import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Please from './Please';

export default {
  title: 'Pages/Please',
  component: Please,
} as Meta;

const Template: Story = (storyArguments) => <Please {...storyArguments} />;

export const PleaseStory = Template.bind({});
