import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface ButtonProps {
  variant?: 'light' | 'dark';
  socialMediaIcon?: ReactNode;
}

const variants = {
  light: css`
    .socialMediaButton {
      background-color: ${({theme}) => theme.darkBackgroundColor};
    }
    .iconColorSVG {
      fill: ${({theme}) => theme.lightIconColor};
    }
    &:hover .socialMediaButton,
    &:active {
      background-color: ${({theme}) => theme.lightBackgroundColor};
    }
    &:hover .iconColorSVG {
      fill: ${({theme}) => theme.darkIconColor};
      transition: All 300ms ease;
    }
  `,
  dark: css`
    .socialMediaButton {
      background-color: ${({theme}) => theme.lightBackgroundColor};
    }
    .iconColorSVG {
      fill: ${({theme}) => theme.darkIconColor};
      transition: All 300ms ease;
    }
    &:hover .socialMediaButton,
    &:active {
      background-color: ${({theme}) => theme.darkBackgroundColor};
    }
    &:hover .iconColorSVG {
      fill: ${({theme}) => theme.lightIconColor};
    }
  `,
};

export const StyledButton = styled.div<ButtonProps>`
  ${({variant}) => variants[variant || 'light']}
  .socialMediaButton {
    width: 2.25em;
    height: 2.25em;
    border-radius: 0.4em;
    padding: 1em 1em;
    position: absolute;
    transition: All 300ms ease;
    cursor: pointer;
  }

  .socialMediaIcon {
    width: 2.25em;
    height: 2.25em;
  }
`;