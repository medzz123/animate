import { fireEvent, render } from '@test/testUtils';
import React from 'react';

import AnimatableInput from './AnimatableInput';

test('AnimatableInput Test', () => {
  const { getByTestId, container } = render(<AnimatableInput label="Test" />);

  const animatableInputNode = getByTestId(
    'animatable-input'
  ) as HTMLInputElement;

  const animatableInputLabelNode = getByTestId('animatable-input-label');

  fireEvent.change(animatableInputNode, { target: { value: 'Hello' } });

  expect(animatableInputNode.value).toBe('Hello');
  expect(animatableInputLabelNode.textContent).toBe('Test');

  expect(container).toMatchSnapshot();
});
