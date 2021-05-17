import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BiMove } from 'react-icons/bi';

import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story = (storyArguments) => (
  <div style={{ backgroundColor: '#313C60', padding: '30px' }}>
    <Accordion
      title="Accordion"
      id="accordion"
      Icon={BiMove}
      {...storyArguments}
    >
      <p>Hello from the other side</p>
    </Accordion>
  </div>
);

export const AccordionStory = Template.bind({});

AccordionStory.args = {
  title: 'Accordion',
  id: 'Accordion',
  Icon: BiMove,
};
