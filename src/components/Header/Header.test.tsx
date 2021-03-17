import { render } from '@test/testUtils';
import React from 'react';

import Header from './Header';

test('Header Test', () => {
  const { container } = render(
    <Header toggleDarkMode={jest.fn()}>Hello</Header>
  );

  expect(container).toMatchSnapshot();
});
