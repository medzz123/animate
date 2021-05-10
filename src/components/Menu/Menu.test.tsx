import { render } from '../../../__tests__/testUtils';
import React from 'react';

import Menu from './Menu';

test('Menu Test', () => {
  const { getByTestId, container } = render(<Menu>Hello</Menu>);

  const menuNode = getByTestId('menu');

  expect(menuNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
