import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const Template: Story = (storyArguments) => {
  return <Header toggleDarkMode={noop} {...storyArguments} />;
};

export const HeaderStory = Template.bind({});
