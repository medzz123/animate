import React from 'react';

import { HeaderContainer, List } from './Header.styles';

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <p>Animate</p>
      <List>
        <li>App</li>
        <li>Animations</li>
      </List>
    </HeaderContainer>
  );
};

export default Header;
