import { render } from '@test/testUtils';
import React from 'react';

import Settings from './Settings';

test('Settings Test', () => {
  const { getByTestId, container } = render(
    <Settings
      darkMode={{
        value: false,
        enable: jest.fn(),
        disable: jest.fn(),
        toggle: jest.fn(),
      }}
    />
  );

  const settingsNode = getByTestId('settings');

  expect(settingsNode).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
