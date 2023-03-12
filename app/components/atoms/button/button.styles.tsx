import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
}

const variants = {
  primary: css`
    background-color: ${({theme}) => theme.buttonPrimaryColor};
    border-color: ${({theme}) => theme.buttonPrimaryDarkerColor};
    color: ${({theme}) => theme.buttonPrimaryTextColor};

    &:hover,
    &:active {
      background-color: ${({theme}) => theme.buttonPrimaryDarkerColor};
    }
  `,
  secondary: css`
    background-color: ${({theme}) => theme.buttonSecondaryColor};
    border-color: ${({theme}) => theme.buttonSecondaryDarkerColor};
    color: ${({theme}) => theme.buttonSecondaryTextColor};

    &:active {
      background-color: ${({theme}) => theme.buttonSecondaryDarkerColor};
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  ${({variant}) => variants[variant || 'primary']}

  border-style: solid;
  border-radius: 0.5em;
  border-width: 2px 6px 6px 2px;
  font-weight: bold;
  padding: 1em 2em;
  position: relative;
  top: 0;
  left: 0;
  transition: All 200ms ease;

  &:hover,
  &:active {
    border-width: 2px 2px 2px 2px;
    left: 4px;
    top: 4px;
  }

  &:focus {
    text-decoration: underline;
  }
`;
