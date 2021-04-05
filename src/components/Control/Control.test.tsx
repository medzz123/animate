import { render } from '@test/testUtils';
import React from 'react';

import Control from './Control';

test('Control Test', () => {
  const { container } = render(<Control />);

  expect(container).toMatchSnapshot();
});
