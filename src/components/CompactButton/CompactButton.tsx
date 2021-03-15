import React from 'react';

import { CompactButtonProps } from './CompactButton.models';
import { StyledButton } from './CompactButton.styles';

const CompactButton: React.FC<CompactButtonProps> = (props) => {
  const { icon, type = 'button', children, ...rest } = props;
  return (
    <StyledButton type={type} {...rest}>
      <div style={{ display: 'flex' }}>
        {icon}
        <div style={{ marginRight: icon ? 5 : 0 }} />
        {children}
      </div>
    </StyledButton>
  );
};

export default CompactButton;
