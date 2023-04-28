import {FC} from 'react';

import buttonFace from './img/button-face.svg';
import {
  ButtonFace,
  SeeMenuButtonProps,
  StyledSeeMenuButton,
  VerticalLine,
} from './see-menu-button.styles';

export const SeeMenuButton: FC<SeeMenuButtonProps> = ({variant, href}) => {
  return (
    <StyledSeeMenuButton variant={variant} href={href}>
      <a href={href} target="_blank" rel="noreferrer">
        <VerticalLine top={93} left={83} />
        <VerticalLine top={85} left={93} />
        <ButtonFace src={buttonFace} alt="Diseño del botón" />
      </a>
    </StyledSeeMenuButton>
  );
};
