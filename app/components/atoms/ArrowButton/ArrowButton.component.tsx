import {FC} from 'react';

import {
  Arrow,
  ArrowButtonFace,
  ArrowButtonProps,
  StyledArrowButton,
} from './ArrowButton.styles';

import arrowImg from './img/arrow.svg';

export const ArrowButton: FC<ArrowButtonProps> = ({variant, ...props}) => {
  return (
    <StyledArrowButton variant={variant} {...props}>
      <ArrowButtonFace>
        <Arrow
          src={arrowImg}
          alt={`${variant === 'right' ? 'Right' : 'Left'} arrow graphic`}
        />
      </ArrowButtonFace>
    </StyledArrowButton>
  );
};
