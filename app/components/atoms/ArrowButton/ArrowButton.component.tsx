import {FC} from 'react';

import {
  Img,
  ArrowButtonFace,
  ArrowButtonProps,
  StyledArrowButton,
} from './ArrowButton.styles';
import arrowImg from './img/arrow.svg';

export const ArrowButton: FC<ArrowButtonProps> = ({variant}) => {
  return (
    <StyledArrowButton variant={variant}>
      <ArrowButtonFace>
        <Img
          src={arrowImg}
          alt={`${variant === 'right' ? 'Right' : 'Left'} arrow graphic`}
        />
      </ArrowButtonFace>
    </StyledArrowButton>
  );
};
