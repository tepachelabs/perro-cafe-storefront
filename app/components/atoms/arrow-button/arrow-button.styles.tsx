import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

import arrowImg from './img/arrow.svg';

const ButtonBaseStyle = ({theme}: {theme: Theme}) => css`
  border: ${theme.sizes.borderWidth} solid ${theme.colors.black};
  height: 48px;
  width: 48px;
`;

export const ArrowButton = styled.button<{
  isLeft?: boolean;
}>`
  ${ButtonBaseStyle};

  background-color: ${(props) => props.theme.colors.backgroundDarker};
  position: relative;

  &:before {
    ${ButtonBaseStyle};

    content: ' ';
    display: block;
    left: -${(props) => props.theme.sizes.borderWidth}; // compensate for border in parent
    left: -${(props) => props.theme.sizes.borderWidth}; // compensate for border in parent
    position: absolute;
    top: -${(props) => props.theme.sizes.borderWidth}; // compensate for border in parent
    transition: all 200ms ease;
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -2.5)
    );
    will-change: transform;

    background: ${(props) => props.theme.colors.background} url(${arrowImg})
      no-repeat center;
    background-size: 50% 50%;
  }

  &:hover:before {
    filter: brightness(1.05);
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -3)
    );
  }

  &:active:before {
    filter: brightness(0.95);
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -1.5)
    );
  }

  ${({isLeft}) =>
    isLeft &&
    css`
      transform: scaleX(-1);
    `}
`;
