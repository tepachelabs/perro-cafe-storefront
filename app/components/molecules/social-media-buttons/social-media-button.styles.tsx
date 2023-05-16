import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

const SquaredButtonStyle = ({theme}: {theme: Theme}) => css`
  align-items: center;
  background-color: ${theme.colors.black};
  border-radius: 2px;
  display: flex;
  height: 36px;
  justify-content: center;
  padding: 8px;
  position: relative;
  width: 36px;
`;

export interface SquaredButtonProps {
  color?: keyof Theme['colors'];
  size?: number;
  href: string;
}

export const SquaredButton = styled.a<SquaredButtonProps>`
  ${SquaredButtonStyle};

  ${({size}) => size && `height: ${size}px; width: ${size}px;`}
  ${({color, theme}) => color && `background-color: ${theme.colors[color]};`}
  text-decoration: none;

  & > * {
    aspect-ratio: 1;
    height: 100%;
  }

  &:hover,
  &:focus,
  &:active {
    filter: brightness(1.5);
  }
`;
