import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Settings from './Settings';

test('Settings Test', () => {
  const { getByTestId, container } = render(
    <Settings
      themeController={{
        theme: {
          background: '#232946',
          headline: '#fffffe',
          paragraph: '#b8c1ec',
          button: '#eebbc3',
          buttonText: '#232946',
        },
        state: false,
        toggleTheme: jest.fn(),
        mounted: true,
      }}
    />
  );

  const settingsNode = getByTestId('settings');

  expect(settingsNode).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
