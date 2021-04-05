import { render } from '@test/testUtils';
import React from 'react';

import Button from './Button';

test('Button Test', () => {
  const { getByTestId, container } = render(<Button>Hello</Button>);

  const buttonNode = getByTestId('button');

  expect(buttonNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
