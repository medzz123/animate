import { Root } from '@radix-ui/react-dialog';
import React, { FunctionComponent } from 'react';

import { DialogProps } from './Dialog.models';
import { StyledContent, StyledOverlay, StyledTrigger } from './Dialog.styles';

const Dialog: FunctionComponent<DialogProps> = (props) => {
  const { label, children, onOpenChange, open, close, button = false } = props;
  return (
    <Root data-testid="dialog" open={open} onOpenChange={onOpenChange}>
      {button && <StyledTrigger type="button">{label}</StyledTrigger>}
      <StyledOverlay />
      <StyledContent onPointerDownOutside={close} onEscapeKeyDown={close}>
        {children}
      </StyledContent>
    </Root>
  );
};

export default Dialog;
