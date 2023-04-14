import {FC, ReactNode, useState} from 'react';

import burgerMenu from './img/burger-menu.svg';
import logo from './img/logo.svg';
import {MenuButton, Drawer, Flex, Header, Img, Icon} from './navbar.styles';
import useMediaQuery from '../../../hooks/use-media-query';

export {NavBarLink} from './navbar.styles';

interface Props {
  links: Array<{
    label: string;
    href: string;
    active?: boolean | string;
  }>;
  linkRender: FC<{
    to: string;
    children: ReactNode;
    active?: boolean | string;
  }>;
}

export const NavBar: FC<Props> = (props) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? <DesktopNavBar {...props} /> : <MobileNavBar {...props} />;
};

const MobileNavBar: FC<Props> = ({linkRender: Link, links}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleMenuPressed = () => {
    setShowDrawer((currentState) => !currentState);
  };

  return (
    <Header>
      <Flex>
        <Img src={logo} alt="Culto al Perro Café logo" />
        <MenuButton onClick={handleMenuPressed} aria-label="Open menu">
          <Icon src={burgerMenu} alt="Menu icon" />
        </MenuButton>
      </Flex>
      <Drawer collapsed={!showDrawer}>
        {links.map((link) => (
          <Link key={link.label} to={link.href} active={link.active}>
            {link.label}
          </Link>
        ))}
      </Drawer>
    </Header>
  );
};

const DesktopNavBar: FC<Props> = ({linkRender: Link, links}) => (
  <Header>
    <Flex>
      <Img src={logo} alt="Culto al Perro Café logo" />
      <Drawer>
        {links.map((link) => (
          <Link key={link.label} to={link.href} active={link.active}>
            {link.label}
          </Link>
        ))}
      </Drawer>
    </Flex>
  </Header>
);
