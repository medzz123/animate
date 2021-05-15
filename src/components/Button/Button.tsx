import { forwardRef } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ButtonContainer ref={ref} type="button" data-testid="button" {...rest}>
      {children}
    </ButtonContainer>
  );
});

Button.displayName = 'Button';

export default Button;
