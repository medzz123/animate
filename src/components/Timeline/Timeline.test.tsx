import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Timeline from './Timeline';

test('Timeline Test', () => {
  const { container } = render(
    <Timeline handleReset={jest.fn}>Hello</Timeline>
  );

  expect(container).toMatchSnapshot();
});
