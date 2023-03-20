import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface SeeMenuButtonProps {
  children?: ReactNode;
  variant: 'primary';
}

const styles = css`
  background-color: #c04625;
  color: #222222;
  width: 122px;
  height: 120px;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  outline-offset: 4px;
  padding: 0;
  border: 2px solid #222222;
  position: absolute;
  top: 20px;
`;

export const StyledSeeMenuButton = styled.button<SeeMenuButtonProps>`
  ${styles}
  & .btn-front {
    display: block;
    border: 2px solid #222222;
    background-color: #f1774c;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    left: -2px;
    transform: translateY(-16px);
    transition: all 200ms ease;
    will-change: transform;
  }

  & .btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.24);
    transform: translateY(8px);
    transition: all 200ms ease;
  }

  &:active .btn-front {
    transform: translateY(-4px);
  }

  &:active .btn-shadow {
    transform: translateY(2px);
  }
`;
