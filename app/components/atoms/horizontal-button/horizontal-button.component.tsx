import {FC} from 'react';

import {
  Img,
  ButtonFace,
  ContentText,
  HorizontalButtonProps,
  StyledHorizontalButton,
} from './horizontal-button.styles';
import arrow from './img/arrow.svg';

export const HorizontalButton: FC<HorizontalButtonProps> = ({
  label,
  onClick,
}) => (
  <StyledHorizontalButton onClick={onClick}>
    <ButtonFace>
      <ContentText>{label}</ContentText>
      <Img src={arrow} alt="Arrow graphic" />
    </ButtonFace>
  </StyledHorizontalButton>
);
