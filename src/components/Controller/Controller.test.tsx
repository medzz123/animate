import { IdProvider } from '@radix-ui/react-id';
import { render } from '@test/testUtils';
import React from 'react';

import Controller from './Controller';

test('Controller Test', () => {
  const { container } = render(
    <IdProvider>
      <Controller />
    </IdProvider>
  );

  expect(container).toMatchSnapshot();
});
