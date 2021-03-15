import { render } from '@test/testUtils';
import React from 'react';

import Button from './Button';

test('<Button />', () => {
  const { container } = render(<Button>Hello</Button>);
  expect(container).toMatchSnapshot();
});
