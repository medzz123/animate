import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Settings from './Settings';

test('Settings Test', () => {
  const { getByTestId, container } = render(
    <Settings
      themeController={{
        theme: {},
        setTheme: jest.fn(),
        themeName: 'dark',
        mounted: true,
      }}
    />
  );

  const settingsNode = getByTestId('settings');

  expect(settingsNode).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
