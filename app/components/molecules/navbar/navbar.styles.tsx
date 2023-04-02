import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({theme}) => theme.colors.black};
  padding: 0.5rem 0;
`;

export const Flex = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
`;

export const Img = styled.img`
  height: 40px;
`;

export const NavBarLink = styled.a<{
  active?: boolean | string;
}>`
  color: ${({theme}) => theme.colors.backgroundDarker};
  cursor: pointer;
  display: inline-block;
  font-family: ${({theme}) => theme.fonts.body};
  font-weight: bold;
  padding: 0.15rem 0.5rem;
  text-decoration: none;

  ${({theme, active}) =>
    active && `border-bottom: 4px solid ${theme.colors.primary};`}
`;
