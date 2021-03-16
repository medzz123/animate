import { render } from '@test/testUtils';
import React from 'react';

import Button from './Button';

test('<Button />', () => {
  const { container, getByTestId } = render(<Button>Hello</Button>);
  expect(container).toMatchSnapshot();

  const buttonNode = getByTestId('button') as HTMLButtonElement;

  expect(buttonNode.textContent).toBe('Hello');
});
