import { render } from '@test/testUtils';
import React from 'react';

import Box from './Box';

test('Box Test', () => {
  const { getByTestId, container } = render(<Box>Hello</Box>);

  const boxNode = getByTestId('box');

  expect(boxNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
