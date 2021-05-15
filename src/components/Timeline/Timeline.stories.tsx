import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Timeline from './Timeline';

export default {
  title: 'Components/Timeline',
  component: Timeline,
} as Meta;

const Template: Story = (storyArguments) => (
  <Timeline
    handleReset={() => {
      // nothing
    }}
    {...storyArguments}
  />
);

export const TimelineStory = Template.bind({});
