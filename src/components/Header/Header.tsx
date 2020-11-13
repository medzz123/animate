import Link from 'next/link';
import React from 'react';

import { HeaderContainer, List } from './Header.styles';

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <p>Animate</p>
      <List>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/animate">App</Link>
        </li>
        <li>Animations</li>
      </List>
    </HeaderContainer>
  );
};

export default Header;
