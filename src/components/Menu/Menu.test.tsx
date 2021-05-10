import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Menu from './Menu';

test('Menu Test', () => {
  const { container } = render(
    <Menu
      items={[
        {
          label: 'Load',
          onClick: jest.fn,
        },
        {
          label: 'Target',
          onClick: jest.fn,
        },
        {
          label: 'Export',
          onClick: jest.fn,
        },
        {
          label: 'Help',
          onClick: jest.fn,
        },
      ]}
    />
  );

  expect(container).toMatchSnapshot();
});
