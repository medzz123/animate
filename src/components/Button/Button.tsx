import { forwardRef } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = 'secondary', size = 'medium', children, ...rest } = props;

  return (
    <ButtonContainer
      ref={ref}
      variant={variant}
      size={size}
      data-testid="button"
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
});

Button.displayName = 'Button';

export default Button;
