import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Control from './Control';

test('Control Test', () => {
  const { container } = render(<Control handleReset={jest.fn()} />);

  expect(container).toMatchSnapshot();
});
