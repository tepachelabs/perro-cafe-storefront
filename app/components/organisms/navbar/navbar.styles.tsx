import styled from '@emotion/styled';

interface NavBarLinkProps {
  active?: boolean | string;
}

export const _NavBar = styled.nav`
  background-color: ${({theme}) => theme.colors.black};
  padding: 0 1.25em;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  max-width: ${({theme}) => theme.sizes.maxWidth};
  margin: 0 auto;

  ${(props) => props.theme.mediaQueries.desktop} {
    padding: 0 1.25em;
  }
`;

export const Img = styled.img`
  height: 1.75em;
`;

export const MenuButton = styled.button`
  position: relative;
  display: block;

  cursor: pointer;
  background-color: transparent;
  width: 36px;
  border: none;
`;

export const Icon = styled.img`
  width: 100%;
`;

export const Drawer = styled.div<{collapsed?: boolean}>`
  background-color: ${({theme}) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  width: 100%;
  display: ${({collapsed}) => collapsed && 'none'};

  ${(props) => props.theme.mediaQueries.desktop} {
    padding: 0;
    flex-direction: row;

    width: auto;
  }
`;

export const NavBarLink = styled.a<NavBarLinkProps>`
  display: block;
  padding: 0.5rem 0 0;
  cursor: pointer;
  height: 48px;

  color: ${({theme}) => theme.colors.backgroundDarker};
  font-family: ${({theme}) => theme.fonts.body};
  font-weight: bold;
  text-decoration: none;
  line-height: 48px;

  border-bottom: ${({theme}) => theme.sizes.borderWidth} solid transparent;

  ${(props) => props.theme.mediaQueries.desktop} {
    display: inline-block;
    margin-left: 0.65rem;
    padding: 0;
    height: auto;

    font-size: 14px;
    line-height: 16px;
  }

  ${({theme, active}) =>
    active && `border-bottom-color: ${theme.colors.primary};`};
`;
