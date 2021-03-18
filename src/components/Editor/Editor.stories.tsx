import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Editor from './Editor';

export default {
  title: 'Components/Editor',
  component: Editor,
} as Meta;

const Template: Story = (storyArguments) => <Editor {...storyArguments} />;

export const EditorStory = Template.bind({});
