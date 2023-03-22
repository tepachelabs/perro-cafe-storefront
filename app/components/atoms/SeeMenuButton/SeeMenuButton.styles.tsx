import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface SeeMenuButtonProps {
  children?: ReactNode;
  variant: 'primary';
}

const styles = css`
  background-color: #c04625;
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #222222;
  outline-offset: 4px;
  padding: 0;
  transition: all 200ms ease;
  will-change: transform;
  transform: translateY(16px);

  &:hover {
    filter: brightness(1.1);
  }
`;

export const StyledSeeMenuButton = styled.button<SeeMenuButtonProps>`
  ${styles}
  .st0 {
    display: none;
    fill: #c04625;
  }
  .st1 {
    fill: #f1774c;
  }
  .st2 {
    fill: #f2dab2;
  }
  .st3 {
    fill: #222222;
  }
  .st4 {
    display: none;
    fill: #222222;
  }
  .st5 {
    fill: none;
    stroke: #222222;
    stroke-width: 3;
    stroke-miterlimit: 10;
  }

  .button-front {
    display: block;
    position: relative;
    padding: 0;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    left: -3px;

    will-change: transform;
    transform: translateY(-16px);
    transition: transform 200ms ease;
  }

  &:hover .button-front {
    transform: translateY(-17px);
  }

  &:active .button-front {
    transform: translateY(-8px);
  }
`;
