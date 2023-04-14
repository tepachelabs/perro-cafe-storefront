import {ReactNode} from 'react';
import styled, {css} from 'styled-components';

export interface HorizontalButtonProps {
  label?: string;
  onClick: () => void;
}

export const ButtonFace = styled.span`
  display: block;
  width: 220px;
  height: 46px;
  background-color: #f8eee0;
  border: 3px solid #222222;
  border-radius: 23px;
  transform: translateY(-16px);
  transition: all 200ms ease;

  position: relative;
  left: -3px;

  &:hover {
    transform: translateY(-17px);
  }
`;

export const StyledHorizontalButton = styled.button`
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

  &:hover ${ButtonFace} {
    transform: translateY(-17px);
  }

  &:active {
    filter: brightness(0.95);
  }

  &:active ${ButtonFace} {
    transform: translateY(-8px);
  }

  * {
    box-sizing: border-box;
  }
`;

export const ContentText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;

  position: absolute;
  top: 9px;
  left: 20px;
`;

export const Img = styled.img`
  position: absolute;
  top: 6px;
  right: 12px;
  height: 23px;
  width: 14px;
`;
