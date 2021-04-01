import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Box from './Box';
import Expanded from './Expanded';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story = (storyArguments) => (
  <Box {...storyArguments}>
    <p>of-</p>
    <p>course-</p>
    <p>i-</p>
    <p>still-</p>
    <p>love-</p>
    <p>you</p>
  </Box>
);

export const BoxStory = Template.bind({});

BoxStory.args = {
  display: 'flex',
  flexDirection: { 375: 'column', 480: 'row' },
  padding: { 480: 20, 992: 40 },
};

const ExpandedTemplate: Story = (storyArguments) => (
  <div style={{ width: 300, height: 300, backgroundColor: 'tomato' }}>
    <Expanded
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...storyArguments}
    >
      <p>Hello</p>
    </Expanded>
  </div>
);

export const ExpandedStory = ExpandedTemplate.bind({});
