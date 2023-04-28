import {FC} from 'react';

import {
  Img,
  ButtonFace,
  Label,
  StyledHorizontalButton,
} from './horizontal-button.styles';
import arrow from './img/arrow.svg';

interface Props {
  label: string;
  href: string;
}

export const HorizontalButton: FC<Props> = ({label, href}) => (
  <StyledHorizontalButton href={href} target="_blank">
    <ButtonFace>
      <Label>{label}</Label>
      <Img src={arrow} alt="Flecha" />
    </ButtonFace>
  </StyledHorizontalButton>
);
