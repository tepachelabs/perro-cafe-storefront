import {FC, ReactNode, useState} from 'react';

import burgerMenu from './img/burger-menu.svg';
import logo from './img/logo.svg';
import {MenuButton, Drawer, Flex, _NavBar, Img, Icon} from './navbar.styles';
import useMediaQuery from '../../../hooks/use-media-query';
import {Link} from '../../atoms/link';

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

const MobileNavBar: FC<Props> = ({linkRender: LinkRender, links}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleMenuPressed = () => {
    setShowDrawer((currentState) => !currentState);
  };

  return (
    <_NavBar>
      <Flex>
        <Img src={logo} alt="Logotipo de Culto al Perro Café" />
        <MenuButton onClick={handleMenuPressed} aria-label="Abrir menú">
          <Icon src={burgerMenu} alt="Ícono de menú" />
        </MenuButton>
      </Flex>
      <Drawer collapsed={!showDrawer}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            active={link.active}
            linkRender={LinkRender}
          >
            {link.label}
          </Link>
        ))}
      </Drawer>
    </_NavBar>
  );
};

const DesktopNavBar: FC<Props> = ({linkRender: LinkRender, links}) => (
  <_NavBar>
    <Flex>
      <Img src={logo} alt="Logotipo de Culto al Perro Café" />
      <Drawer>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            active={link.active}
            linkRender={LinkRender}
          >
            {link.label}
          </Link>
        ))}
      </Drawer>
    </Flex>
  </_NavBar>
);
