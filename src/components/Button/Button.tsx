import React from 'react';

import { Border, Span, StyledButton } from './Button.styles';

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonTypes> = (props) => {
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
