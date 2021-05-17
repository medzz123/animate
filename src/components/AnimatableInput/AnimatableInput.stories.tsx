import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import AnimatableInput from './AnimatableInput';

export default {
  title: 'Components/AnimatableInput',
  component: AnimatableInput,
} as Meta;

const Template: Story = (storyArguments) => (
  <div style={{ backgroundColor: '#313C60', padding: '30px' }}>
    <AnimatableInput label="Story Input" {...storyArguments} />
  </div>
);

export const AnimatableInputStory = Template.bind({});

AnimatableInputStory.args = {
  placeholder: '10rem 20rem',
};
