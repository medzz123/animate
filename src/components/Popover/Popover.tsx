import { Root, Trigger } from '@radix-ui/react-popover';
import React, { FunctionComponent } from 'react';

import { PopoverProps } from './Popover.models';
import { StyledContent } from './Popover.styles';

const Popover: FunctionComponent<PopoverProps> = (props) => {
  const { label, children } = props;
  return (
    <Root data-testid="popover">
      <Trigger type="button">{label}</Trigger>
      <StyledContent>{children}</StyledContent>
    </Root>
  );
};

export default Popover;
