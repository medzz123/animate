import { render } from '@test/testUtils';
import React from 'react';
import { BiMove } from 'react-icons/bi';

import Accordion from './Accordion';

test('Accordion Test', () => {
  const { container } = render(
    <Accordion id="title" title="test" Icon={BiMove} />
  );

  expect(container).toBeInTheDocument();
});
