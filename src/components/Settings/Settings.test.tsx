import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Settings from './Settings';

test('Settings Test', () => {
  const { getByTestId, container } = render(
    <Settings theme={true} toggle={jest.fn()} />
  );

  const settingsNode = getByTestId('settings');

  expect(settingsNode).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
