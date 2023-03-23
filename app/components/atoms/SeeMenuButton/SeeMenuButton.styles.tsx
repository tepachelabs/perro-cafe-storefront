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
    filter: brightness(1.05);
  }

  &:active {
    filter: brightness(0.95);
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

  .see-menu-button__front {
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

  &:hover .see-menu-button__front {
    transform: translateY(-17px);
  }

  &:active .see-menu-button__front {
    transform: translateY(-8px);
  }
`;

export const VerticalLines = styled.div`
  & .see-menu-button__line-one {
    display: block;
    position: absolute;
    width: 3px;
    height: 16px;
    top: 93px;
    left: 83px;
    background: #222222;
  }

  & .see-menu-button__line-two {
    display: block;
    position: absolute;
    width: 3px;
    height: 16px;
    top: 85px;
    left: 93px;
    background: #222222;
  }
`;
