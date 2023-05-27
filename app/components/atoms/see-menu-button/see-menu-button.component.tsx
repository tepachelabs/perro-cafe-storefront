import {FC, HTMLAttributeAnchorTarget} from 'react';

import buttonFace from './img/button-face.svg';
import {
  ButtonFace,
  StyledSeeMenuButton,
  VerticalLine,
} from './see-menu-button.styles';

interface Props {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const SeeMenuButton: FC<Props> = ({href, target}) => (
  <StyledSeeMenuButton href={href} target={target}>
    <VerticalLine top={93} left={83} />
    <VerticalLine top={85} left={93} />
    <ButtonFace src={buttonFace} alt="Diseño del botón" />
  </StyledSeeMenuButton>
);
