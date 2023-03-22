import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

export interface HorizontalButtonProps {
  content?: ReactNode;
}

export const StyledHorizontalButton = styled.button<HorizontalButtonProps>`
  width: 220px;
  height: 46px;
  background-color: #f2dab2;
  border: 3px solid #222222;
  border-radius: 16px 16px 23px 23px;
  color: #222222;
  cursor: pointer;
  transition: all 200ms ease;
  transform: translateY(16px);
  outline-offset: 4px;
  padding: 0;

  &:hover {
    filter: brightness(1.05);
  }

  & .front-btn {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f8eee0;
    border: 3px solid #222222;
    border-radius: 23px;
    transform: translateY(-16px);
    transition: all 200ms ease;

    position: relative;
    left: -3px;
  }

  & .text-btn {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 16px;

    position: absolute;
    top: 8px;
    left: 20px;
  }

  & .arrow-btn {
    position: absolute;
    top: 6px;
    right: 10px;
  }

  &:hover .front-btn {
    transform: translateY(-17px);
  }

  &:active .front-btn {
    filter: brightness(0.95);
    transform: translateY(-8px);
  }
`;
