import {FC} from 'react';

import {
  Img,
  ButtonFace,
  ContentText,
  StyledHorizontalButton,
} from './horizontal-button.styles';
import arrow from './img/arrow.svg';

interface Props {
  label: string;
  onClick: () => void;
}

export const HorizontalButton: FC<Props> = ({label, onClick}) => (
  <StyledHorizontalButton onClick={onClick}>
    <ButtonFace>
      <ContentText>{label}</ContentText>
      <Img src={arrow} alt="Arrow graphic" />
    </ButtonFace>
  </StyledHorizontalButton>
);
