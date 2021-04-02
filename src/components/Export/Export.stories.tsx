import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Export from './Export';

export default {
  title: 'Components/Export',
  component: Export,
} as Meta;

const Template: Story = (storyArguments) => <Export {...storyArguments} />;

export const ExportStory = Template.bind({});
