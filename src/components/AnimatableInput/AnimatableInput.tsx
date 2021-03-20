import React, { FunctionComponent } from 'react';

import { AnimatableInputProps } from './AnimatableInput.models';
import {
  AnimatableInputContainer,
  Label,
  StyledInput,
} from './AnimatableInput.styles';

const AnimatableInput: FunctionComponent<AnimatableInputProps> = (props) => {
  const { label, ...rest } = props;

  return (
    <AnimatableInputContainer>
      <Label htmlFor={label} data-testid="animatable-input-label">
        {label}
      </Label>
      <StyledInput
        id={label}
        autoComplete="off"
        data-testid="animatable-input"
        {...rest}
      />
    </AnimatableInputContainer>
  );
};

export default AnimatableInput;
