import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Artboard from './Artboard';

test('Artboard Test', () => {
  const { getByTestId, container } = render(<Artboard>Hello</Artboard>);

  const artboardNode = getByTestId('artboard');

  expect(artboardNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
