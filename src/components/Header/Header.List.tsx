import { LinkHighlight } from '@components/Highlight';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { LinkListProps } from './Header.models';
import { List, ThemeButton } from './Header.styles';

const navigationLinks = [
  { path: '/browse', title: 'browse', id: 'browse-id-1' },
  { path: '/animate', title: 'animate', id: 'animate-id-1' },
];

const LinkList: FunctionComponent<LinkListProps> = ({
  toggleDarkMode,
  vertical,
}) => {
  return (
    <List vertical={vertical}>
      {navigationLinks.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <a>
              <LinkHighlight>{item.title}</LinkHighlight>
            </a>
          </Link>
        </li>
      ))}
      <ThemeButton type="button" onClick={toggleDarkMode}>
        <LinkHighlight>toggle theme</LinkHighlight>
      </ThemeButton>
    </List>
  );
};

export default LinkList;
