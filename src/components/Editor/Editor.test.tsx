import { render } from '@test/testUtils';
import React from 'react';

import Editor from './Editor';

test('Editor Test', () => {
  const { getByTestId, container } = render(<Editor>Hello</Editor>);

  const editorNode = getByTestId('editor');

  expect(editorNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
