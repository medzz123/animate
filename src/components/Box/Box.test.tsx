import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Box from './Box';

test('Box Test', () => {
  const { getByTestId, container } = render(<Box>Hello</Box>);

  const boxNode = getByTestId('box');

  expect(boxNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
