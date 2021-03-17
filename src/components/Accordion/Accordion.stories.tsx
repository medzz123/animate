import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story = (storyArguments) => <Accordion {...storyArguments} />;

export const AccordionStory = Template.bind({});

AccordionStory.args = {
  data: [
    { id: 'item-1', title: 'First', content: 'Hello from the other side' },
    { id: 'item-2', title: 'Second', content: 'Hello from this side' },
    { id: 'item-3', title: 'Third', content: 'Dark side of the moon' },
  ],
};
