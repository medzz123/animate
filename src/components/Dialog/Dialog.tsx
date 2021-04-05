import { Root } from '@radix-ui/react-dialog';
import React, { FunctionComponent } from 'react';

import { DialogProps } from './Dialog.models';
import { StyledContent, StyledOverlay, StyledTrigger } from './Dialog.styles';

const Dialog: FunctionComponent<DialogProps> = (props) => {
  const { label, children } = props;
  return (
    <Root data-testid="dialog">
      <StyledTrigger type="button">{label}</StyledTrigger>
      <StyledOverlay />
      <StyledContent>{children}</StyledContent>
    </Root>
  );
};

export default Dialog;
