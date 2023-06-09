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
  width: 3em;
  height: 3em;
  border: none;
  padding: 0;
`;

export const Icon = styled.img`
  height: 100%;
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
