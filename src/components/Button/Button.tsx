import React from 'react';

import { StyledButton } from './Button.styles';

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonTypes> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <p>
        <span className="bg"></span>
        <span className="base"></span>
        <span className="text">{children}</span>
      </p>
    </StyledButton>
  );
};

export default Button;

// <a className="white" href="#">
//   <p>
//     <span className="bg"></span>
//     <span className="base"></span>
//     <span className="text">Play Valorant</span>
//   </p>
// </a>
// <a className="transparent" href="#">
//   <p>
//     <span className="bg"></span>
//     <span className="base"></span>
//     <span className="text">Play Valorant</span>
//   </p>
// </a>
