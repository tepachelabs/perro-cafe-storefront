import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface SocialMediaButtonProps {
  variant?: 'light' | 'dark';
  socialMediaIcon?: ReactNode;
}

const variants = {
  light: css`
    background-color: ${({theme}) => theme.colors.backgroundDarker};
    .iconColorSVG {
      fill: ${({theme}) => theme.colors.black};
    }
    &:hover,
    &:active {
      background-color: ${({theme}) => theme.colors.black};
    }
    &:hover .iconColorSVG {
      fill: ${({theme}) => theme.colors.backgroundDarker};
      transition: All 300ms ease;
    }
  `,
  dark: css`
    background-color: ${({theme}) => theme.colors.black};
    .iconColorSVG {
      fill: ${({theme}) => theme.colors.backgroundDarker};
      transition: All 300ms ease;
    }
    &:hover,
    &:active {
      background-color: ${({theme}) => theme.colors.backgroundDarker};
    }
    &:hover .iconColorSVG {
      fill: ${({theme}) => theme.colors.black};
    }
  `,
};

export const StyledButton = styled.div<SocialMediaButtonProps>`
  ${({variant}) => variants[variant || 'light']}
  width: 2.25em;
  height: 2.25em;
  border-radius: 0.4em;
  padding: 1em 1em;
  position: absolute;
  transition: All 300ms ease;
  cursor: pointer;
`;

export const Icon = styled.div`
  width: 2.25em;
  height: 2.25em;
`;
