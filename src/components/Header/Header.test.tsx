import { render } from '@test/testUtils';
import React from 'react';

import Header from './Header';

test('Header Test', () => {
  const { container } = render(<Header />);

  expect(container).toMatchSnapshot();
});
