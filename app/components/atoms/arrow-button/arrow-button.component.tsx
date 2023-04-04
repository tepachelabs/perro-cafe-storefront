import {FC} from 'react';

import {
  Img,
  ArrowButtonFace,
  ArrowButtonProps,
  StyledArrowButton,
} from './arrow-button.styles';
import arrowImg from './img/arrow.svg';

export const ArrowButton: FC<ArrowButtonProps> = ({variant, onClick}) => {
  return (
    <StyledArrowButton variant={variant} onClick={onClick}>
      <ArrowButtonFace>
        <Img
          src={arrowImg}
          alt={`${variant === 'right' ? 'Right' : 'Left'} arrow graphic`}
        />
      </ArrowButtonFace>
    </StyledArrowButton>
  );
};
