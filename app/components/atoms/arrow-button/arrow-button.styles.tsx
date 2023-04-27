import styled, {css} from 'styled-components';

import arrowImg from './img/arrow.svg';
import {select} from '../../../utils';

const ButtonBaseStyle = css`
  border: ${select(({sizes}) => sizes.borderWidth)} solid
    ${select(({colors}) => colors.black)};
  height: 48px;
  width: 48px;
`;

export const ArrowButton = styled.button<{
  isLeft?: boolean;
}>`
  ${ButtonBaseStyle};

  background-color: ${select(({colors}) => colors.backgroundDarker)};
  position: relative;

  &:before {
    ${ButtonBaseStyle};

    content: ' ';
    display: block;
    left: -${select(({sizes}) => sizes.borderWidth)}; // compensate for border in parent
    left: -${select(({sizes}) => sizes.borderWidth)}; // compensate for border in parent
    position: absolute;
    top: -${select(({sizes}) => sizes.borderWidth)}; // compensate for border in parent
    transition: all 200ms ease;
    transform: translateY(
      calc(${select(({sizes}) => sizes.borderWidth)} * -2.5)
    );
    will-change: transform;

    background: ${select(({colors}) => colors.background)} url(${arrowImg})
      no-repeat center;
    background-size: 50% 50%;
  }

  &:hover:before {
    filter: brightness(1.05);
    transform: translateY(calc(${select(({sizes}) => sizes.borderWidth)} * -3));
  }

  &:active:before {
    filter: brightness(0.95);
    transform: translateY(
      calc(${select(({sizes}) => sizes.borderWidth)} * -1.5)
    );
  }

  ${({isLeft}) =>
    isLeft &&
    css`
      transform: scaleX(-1);
    `}
`;
