import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Button from './Button';

test('Button Test', () => {
  const { getByTestId, container } = render(<Button>Hello</Button>);

  const buttonNode = getByTestId('button');

  expect(buttonNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
