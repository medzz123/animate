import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { MdDashboard } from 'react-icons/md';

import { HeaderContainer, LogoLink, MainLink } from './Header.styles';

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer data-testid="header">
      <Link href="/">
        <LogoLink tabIndex={0}>Animate.</LogoLink>
      </Link>

      <ul>
        <li>
          <Link href="/browse">
            <a>Browse</a>
          </Link>
        </li>
        <li>
          <Link href="/animate">
            <MainLink tabIndex={0}>
              <MdDashboard /> Animate
            </MainLink>
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
