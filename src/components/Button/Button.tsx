import { forwardRef } from 'react';
import { IconContext } from 'react-icons/lib';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = 'secondary', size = 'medium', children, ...rest } = props;

  return (
    <ButtonContainer
      ref={ref}
      variant={variant}
      size={size}
      type="button"
      data-testid="button"
      {...rest}
    >
      <IconContext.Provider value={{ size: '18' }}>
        {children}
      </IconContext.Provider>
    </ButtonContainer>
  );
});

Button.displayName = 'Button';

export default Button;
