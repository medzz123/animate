import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import ContextMenu from './ContextMenu';

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
} as Meta;

const Template: Story = (storyArguments) => <ContextMenu {...storyArguments} />;

export const ContextMenuStory = Template.bind({});
