import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Header from './Header';

test('Header Test', () => {
  const { container } = render(<Header />);

  expect(container).toMatchSnapshot();
});
