import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Help from './Help';

export default {
  title: 'Components/Help',
  component: Help,
} as Meta;

const Template: Story = (storyArguments) => <Help {...storyArguments} />;

export const HelpStory = Template.bind({});
