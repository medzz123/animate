import React from 'react';

import { ButtonProps } from './Button.models';
import { Border, Span, StyledButton } from './Button.styles';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <Border>
        <Span>{children}</Span>
      </Border>
    </StyledButton>
  );
};

export default Button;
