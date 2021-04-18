import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Display from './Display';

test('Display Test', () => {
  const { getByTestId, container } = render(
    <Display animationKey="none">Hello</Display>
  );

  const displayNode = getByTestId('display');

  expect(displayNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
