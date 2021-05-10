import React from 'react';

import { render } from '../../../__tests__/testUtils';
import ContextMenu from './ContextMenu';

test('ContextMenu Test', () => {
  const { getByTestId, container } = render(<ContextMenu>Hello</ContextMenu>);

  const contextMenuNode = getByTestId('contextMenu');

  expect(contextMenuNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
