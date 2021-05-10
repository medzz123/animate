import { Root } from '@radix-ui/react-dropdown-menu';
import { FunctionComponent } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { MenuProps } from './Menu.models';
import { StyledContent, StyledItem, StyledTrigger } from './Menu.styles';

const Menu: FunctionComponent<MenuProps> = (props) => {
  const { items } = props;

  return (
    <Root data-testid="menu">
      <StyledTrigger>
        <GiHamburgerMenu size={24} />
      </StyledTrigger>
      <StyledContent>
        {items?.map((item) => (
          <StyledItem key={item.label} onSelect={item.onClick}>
            {item.label}
          </StyledItem>
        ))}
      </StyledContent>
    </Root>
  );
};

export default Menu;
