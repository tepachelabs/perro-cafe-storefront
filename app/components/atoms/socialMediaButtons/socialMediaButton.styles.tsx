import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface ButtonProps {
  variant?: 'light' | 'dark';
  children?: ReactNode;
}



const variants = {
  light: css`
    background-color: ${({theme}) => theme.darkBackgroundColor};
    color: ${({theme}) => theme.lightIconColor};
    &:hover,
    &:active {
      background-color: ${({theme}) => theme.lightBackgroundColor};
      color: ${({theme}) => theme.darkIconColor};
      filter: inver
    }
  `,
  dark: css`
    background-color: ${({theme}) => theme.lightBackgroundColor};
    color: ${({theme}) => theme.darkIconColor};
    &:hover,
    &:active {
      background-color: ${({theme}) => theme.darkBackgroundColor};
      color: ${({theme}) => theme.lightIconColor};
    }
  `,
};

export const StyledButton = styled.button<ButtonProps> `
  ${({variant}) => variants[variant || 'light']}
  cursor: pointer;
  border-radius: 0.5em;
  border: none;
  padding: 1em 1em;
  position: relative;
  top: 0;
  left: 0;
  transition: All 300ms ease;

`;



