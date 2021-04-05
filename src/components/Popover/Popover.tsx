import { Root } from '@radix-ui/react-popover';
import React, { FunctionComponent } from 'react';

import { PopoverProps } from './Popover.models';
import { StyledContent, StyledTrigger } from './Popover.styles';

const Popover: FunctionComponent<PopoverProps> = (props) => {
  const { label, children } = props;
  return (
    <Root data-testid="popover">
      <StyledTrigger type="button">{label}</StyledTrigger>
      <StyledContent>{children}</StyledContent>
    </Root>
  );
};

export default Popover;
