import { render } from '@test/testUtils';
import React from 'react';

import Timeline from './Timeline';

test('Timeline Test', () => {
  const { container } = render(<Timeline>Hello</Timeline>);

  expect(container).toMatchSnapshot();
});
