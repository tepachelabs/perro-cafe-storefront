import {FC} from 'react';

import {
  Img,
  ArrowButtonFace,
  ArrowButtonProps,
  StyledArrowButton,
} from './arrow-button.styles';
import arrowImg from './img/arrow.svg';

type Button = FC<ArrowButtonProps>;

export const LeftArrow: Button = ({onClick}) => {
  return (
    <StyledArrowButton variant="left" onClick={onClick}>
      <ArrowButtonFace>
        <Img src={arrowImg} alt="Flecha izquierda" />
      </ArrowButtonFace>
    </StyledArrowButton>
  );
};

export const RightArrow: Button = ({onClick}) => {
  return (
    <StyledArrowButton variant="right" onClick={onClick}>
      <ArrowButtonFace>
        <Img src={arrowImg} alt="Flecha derecha" />
      </ArrowButtonFace>
    </StyledArrowButton>
  );
};
