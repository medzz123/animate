import { Root } from '@radix-ui/react-context-menu';
import React, { FunctionComponent } from 'react';

import { ContextMenuProps } from './ContextMenu.models';
import { StyledContent, StyledItem, StyledTrigger } from './ContextMenu.styles';

const ContextMenu: FunctionComponent<ContextMenuProps> = (props) => {
  const { items, children } = props;

  const filteredItems = items
    // @ts-ignore
    ?.filter((item) => item !== false);

  if (filteredItems.length < 1) {
    return <>{children}</>;
  }

  return (
    <Root data-testid="contextMenu">
      <StyledTrigger>{children}</StyledTrigger>
      <StyledContent>
        {filteredItems?.map((item) => (
          <StyledItem key={item.label} onSelect={item.onClick}>
            {item.label}
          </StyledItem>
        ))}
      </StyledContent>
    </Root>
  );
};

export default ContextMenu;
