import styled from 'styled-components';

const desktopMediaQuery = '@media (min-width: 768px)';

interface NavBarLinkProps {
  active?: boolean | string;
}

export const Header = styled.header`
  background-color: ${({theme}) => theme.colors.black};
  padding: 10px 1rem;

  ${desktopMediaQuery} {
    padding: 0.5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: ${({theme}) => theme.sizes.maxWidth};
  margin: 0 auto;
`;

export const Img = styled.img`
  height: 24px;

  ${desktopMediaQuery} {
    height: 28px;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  display: block;

  cursor: pointer;
  background-color: transparent;
  height: 20px;
  width: 34px;
  border: none;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const Drawer = styled.nav<{collapsed?: boolean}>`
  background-color: ${({theme}) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  width: 100%;
  display: ${({collapsed}) => collapsed && 'none'};

  ${desktopMediaQuery} {
    padding: 0;
    flex-direction: row;

    width: auto;
  }
`;

export const NavBarLink = styled.a<NavBarLinkProps>`
  display: block;
  padding: 0.5rem 0 0;
  cursor: pointer;

  color: ${({theme}) => theme.colors.backgroundDarker};
  font-family: ${({theme}) => theme.fonts.body};
  font-weight: bold;
  text-decoration: none;

  border-bottom: 4px solid transparent;

  ${desktopMediaQuery} {
    display: inline-block;
    margin-left: 0.65rem;
    padding: 0;
    font-size: 14px;
  }

  ${({theme, active}) =>
    active && `border-bottom-color: ${theme.colors.primary};`};
`;
