import { Meta, Story } from '@storybook/react/types-6-0';

import Menu from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story = (storyArguments) => (
  <Menu
    items={[
      { label: 'cut', onClick: () => console.log('cut') },
      { label: 'paste', onClick: () => console.log('paste') },
      { label: 'reload', onClick: () => console.log('reload') },
    ]}
    {...storyArguments}
  />
);

export const MenuStory = Template.bind({});
