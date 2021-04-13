import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Undo from './Undo';

export default {
  title: 'Pages/Undo',
  component: Undo,
} as Meta;

const Template: Story = (storyArguments) => <Undo {...storyArguments} />;

export const UndoStory = Template.bind({});
