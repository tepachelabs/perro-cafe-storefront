import {FC} from 'react';

import {
  Img,
  ButtonFace,
  ContentText,
  HorizontalButtonProps,
  StyledHorizontalButton,
} from './HorizontalButton.styles';
import arrow from './img/arrow.svg';

export const HorizontalButton: FC<HorizontalButtonProps> = ({label}) => {
  return (
    <StyledHorizontalButton>
      <ButtonFace>
        <ContentText>{label}</ContentText>
        <Img src={arrow} alt="Arrow graphic" />
      </ButtonFace>
    </StyledHorizontalButton>
  );
};
