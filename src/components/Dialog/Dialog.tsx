import { Root } from '@radix-ui/react-dialog';
import React, { FunctionComponent } from 'react';

import { DialogProps } from './Dialog.models';
import { StyledContent, StyledOverlay, StyledTrigger } from './Dialog.styles';

const Dialog: FunctionComponent<DialogProps> = (props) => {
  const {
    label,
    children,
    onOpenChange,
    open,
    close,
    Icon,
    setOpen,
    button = true,
  } = props;

  return (
    <Root data-testid="dialog" open={open} onOpenChange={onOpenChange}>
      {button && (
        <StyledTrigger onClick={setOpen} type="button">
          <span>{label}</span>
          {Icon && <Icon />}
        </StyledTrigger>
      )}
      <StyledOverlay />
      <StyledContent onPointerDownOutside={close} onEscapeKeyDown={close}>
        {children}
      </StyledContent>
    </Root>
  );
};

export default Dialog;
