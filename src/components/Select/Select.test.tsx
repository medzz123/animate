import React from 'react';

import { render } from '../../../__tests__/testUtils';
import Select from './Select';

test('Select Test', () => {
  const { container } = render(<Select />);

  expect(container).toMatchSnapshot();
});
