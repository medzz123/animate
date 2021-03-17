import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';

import LinkList from './Header.List';
import { HeaderProps } from './Header.models';
import { HeaderContainer, LogoLink, Menu, MenuButton } from './Header.styles';

const Header: FunctionComponent<HeaderProps> = (props) => {
  const { toggleDarkMode } = props;

  const [open, setOpen] = React.useState(false);

  const { pathname } = useRouter();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <HeaderContainer data-testid="header">
      <Link href="/">
        <LogoLink>Animate.</LogoLink>
      </Link>

      <LinkList vertical={false} toggleDarkMode={toggleDarkMode} />

      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </MenuButton>
      <Menu open={open}>
        <LinkList vertical={true} toggleDarkMode={toggleDarkMode} />
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
