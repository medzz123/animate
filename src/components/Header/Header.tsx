import { LinkHighlight } from '@components/Highlight';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Container,
  HeaderWrapper,
  List,
  Logo,
  Menu,
  MenuButton,
  ThemeButton,
} from './Header.styles';

const nav = [
  { title: 'browse', path: '/browse' },
  { title: 'animate', path: '/animate' },
];

const Header: React.FC<{ toggleDarkMode: () => void; dark: boolean }> = ({
  toggleDarkMode,
}) => {
  const [open, setOpen] = React.useState(false);

  const { pathname } = useRouter();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <HeaderWrapper>
      <Container>
        <Link href="/">
          <a>
            <Logo>Animate.</Logo>
          </a>
        </Link>
        <List>
          {nav.map((e, i) => (
            <li key={`navItem-${i}`}>
              <Link href={e.path} passHref>
                <a>
                  <LinkHighlight>{e.title}</LinkHighlight>
                </a>
              </Link>
            </li>
          ))}
          <ThemeButton type="button" onClick={toggleDarkMode}>
            <LinkHighlight>toggle theme</LinkHighlight>
          </ThemeButton>
        </List>

        <MenuButton open={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Menu open={open}>
          <List vertical>
            {nav.map((e, i) => (
              <li key={`vertical-navItem-${i}`}>
                <Link href={e.path} passHref>
                  <a>
                    <LinkHighlight>{e.title}</LinkHighlight>
                  </a>
                </Link>
              </li>
            ))}
            <ThemeButton type="button" onClick={toggleDarkMode} vertical>
              <LinkHighlight>toggle theme</LinkHighlight>
            </ThemeButton>
          </List>
        </Menu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
