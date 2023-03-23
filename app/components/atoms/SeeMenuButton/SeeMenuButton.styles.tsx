import styled from 'styled-components';

export interface SeeMenuButtonProps {
  variant: 'primary';
}

export const ButtonFace = styled.img`
  display: block;
  position: relative;
  padding: 0;
  border-radius: 50%;
  width: 131px;
  height: 131px;
  left: -9px;

  will-change: transform;
  transform: translateY(-16px);
  transition: transform 200ms ease;
`;

export const StyledSeeMenuButton = styled.button<SeeMenuButtonProps>`
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

  &:hover ${ButtonFace} {
    transform: translateY(-17px);
  }

  &:active ${ButtonFace} {
    transform: translateY(-8px);
  }
`;

export const VerticalLine = styled.div<{
  top?: number;
  left?: number;
}>`
  background: #222222;
  display: block;
  position: absolute;
  width: 3px;
  height: 16px;

  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
`;
