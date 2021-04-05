import { render } from '@test/testUtils';
import React from 'react';

import Controller from './Controller';

test('Controller Test', () => {
  const { container } = render(<Controller />);

  expect(container).toMatchSnapshot();
});
