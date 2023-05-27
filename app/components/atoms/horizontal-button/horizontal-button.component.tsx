import {FC, HTMLAttributeAnchorTarget} from 'react';

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
  target?: HTMLAttributeAnchorTarget;
}

export const HorizontalButton: FC<Props> = ({label, href, target}) => (
  <StyledHorizontalButton href={href} target={target}>
    <ButtonFace>
      <Label>{label}</Label>
      <Img src={arrow} alt="Flecha" />
    </ButtonFace>
  </StyledHorizontalButton>
);
