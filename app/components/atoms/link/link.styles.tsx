import styled from '@emotion/styled';

interface NavBarLinkProps {
  active?: boolean | string;
}

export const CustomLink = styled.a<NavBarLinkProps>`
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
