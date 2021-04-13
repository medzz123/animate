import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, LogoLink, MainLink } from './Header.styles';

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer data-testid="header">
      <LogoLink to="/" tabIndex={0}>
        Animate.
      </LogoLink>

      <ul>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li>
          <MainLink to="/animate" tabIndex={0}>
            Animate
          </MainLink>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
