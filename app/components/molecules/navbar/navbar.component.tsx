import React, {FC, ReactNode} from 'react';

import logo from './img/logo.svg';
import {Flex, Header, Img} from './navbar.styles';

export {NavBarLink} from './navbar.styles';

interface Props {
  links: Array<{
    label: string;
    href: string;
    active?: string;
  }>;
  linkRender: FC<{
    to: string;
    children: ReactNode;
    active?: string;
  }>;
}

export const Navbar: FC<Props> = ({linkRender: Link, links}) => {
  return (
    <Header>
      <Flex>
        <a href="/">
          <Img src={logo} />
        </a>
        <nav>
          {links.map((link) => (
            <Link key={link.label} to={link.href} active={link.active}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Flex>
    </Header>
  );
};
