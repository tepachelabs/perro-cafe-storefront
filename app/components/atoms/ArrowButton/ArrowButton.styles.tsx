import styled, {css} from 'styled-components';

export interface ArrowButtonProps {
  variant?: 'right' | 'left';
}

const arrowTransform = {
  right: css`
    transform: translate(-50%, -50%) rotate(0deg);
  `,
  left: css`
    transform: translate(-50%, -50%) rotate(180deg);
  `,
};

export const ArrowButtonFace = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f8eee0;
  border: 3px solid #222222;

  position: absolute;
  left: -3px;

  will-change: transform;
  transform: translateY(-32px);
  transition: all 200ms ease;
`;

export const Img = styled.img`
  width: 60%;
  height: 60%;

  position: absolute;
  top: 50%;
  left: 50%;

  will-change: transform;
`;

export const StyledArrowButton = styled.button<ArrowButtonProps>`
  ${Img} {
    ${({variant}) => arrowTransform[variant || 'right']}
  }

  width: 46px;
  height: 46px;
  background-color: #f2dab2;
  padding: 0;
  border: 3px solid #222222;
  outline-offset: 4px;
  cursor: pointer;

  will-change: transform;
  transform: translateY(16px);
  transition: all 200ms ease;

  &:hover {
    filter: brightness(1.05);
  }

  &:hover ${ArrowButtonFace} {
    transform: translateY(-33px);
  }

  &:active ${ArrowButtonFace} {
    filter: brightness(0.95);
    transform: translateY(-28px);
  }
`;
