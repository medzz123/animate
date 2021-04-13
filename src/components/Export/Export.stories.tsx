import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Export from './Export';

export default {
  title: 'Components/Export',
  component: Export,
} as Meta;

const Template: Story = (storyArguments) => (
  <ToastProvider
    autoDismiss={true}
    placement="bottom-center"
    autoDismissTimeout={2000}
  >
    <Export {...storyArguments} />
  </ToastProvider>
);

export const ExportStory = Template.bind({});
