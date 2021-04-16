import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Artboard from './Artboard';

export default {
  title: 'Components/Artboard',
  component: Artboard,
} as Meta;

const Template: Story = (storyArguments) => <Artboard {...storyArguments} />;

export const ArtboardStory = Template.bind({});
