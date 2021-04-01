import { render } from '@test/testUtils';
import React from 'react';

import Select from './Select';

test('Select Test', () => {
  const { container } = render(<Select />);

  expect(container).toMatchSnapshot();
});
