import {FC, ReactNode, useState} from 'react';
import {useMediaQuery} from 'react-responsive';

import burgerMenu from './img/burger-menu.svg';
import logo from './img/logo.svg';
import {
  MenuButton,
  Drawer,
  Flex,
  Header,
  Img,
  BurgerMenuIcon,
} from './navbar.styles';

export {NavBarLink} from './navbar.styles';

interface Props {
  links: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  linkRender: FC<{
    to: string;
    children: ReactNode;
    active?: boolean | string;
  }>;
}

export const NavBar: FC<Props> = ({linkRender: Link, links}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isDesktop = useMediaQuery({
    query: '(min-width: 960px)',
  });

  const handleBurgerMenuPressed = () => {
    setShowDrawer((currentState) => !currentState);
  };

  return (
    <Header>
      <Flex>
        <Img src={logo} />
        {!isDesktop && (
          <MenuButton onClick={handleBurgerMenuPressed} aria-label="Open menu">
            <BurgerMenuIcon src={burgerMenu} alt="Menu icon" />
          </MenuButton>
        )}
        {isDesktop && (
          <Drawer>
            {links.map((link) => (
              <Link key={link.label} to={link.href} active={link.active}>
                {link.label}
              </Link>
            ))}
          </Drawer>
        )}
      </Flex>
      {!isDesktop && (
        <Drawer collapsed={!showDrawer} aria-hidden={!showDrawer}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} active={link.active}>
              {link.label}
            </Link>
          ))}
        </Drawer>
      )}
    </Header>
  );
};
