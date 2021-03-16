import React from 'react';

import { ButtonProps } from './Button.models';
import { Span, StyledButton } from './Button.styles';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  return (
    <StyledButton variant={variant} size={size} data-testid="button" {...rest}>
      {leftIcon}
      <Span>{children}</Span>
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
