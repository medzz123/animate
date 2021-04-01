import { render } from '@test/testUtils';
import React from 'react';

import Accordion from './Accordion';

test('Accordion Test', () => {
  const { container } = render(<Accordion id="title" title="test" />);

  expect(container).toBeInTheDocument();
});
