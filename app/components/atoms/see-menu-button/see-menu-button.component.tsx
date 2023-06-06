import {FC} from 'react';

import buttonFace from './img/button-face.svg';
import {
  ButtonFace,
  StyledSeeMenuButton,
  VerticalLine,
} from './see-menu-button.styles';
import {Link} from '../link';

interface Props {
  href: string;
}

export const SeeMenuButton: FC<Props> = ({href}) => (
  <Link to={href}>
    <StyledSeeMenuButton>
      <VerticalLine top={93} left={83} />
      <VerticalLine top={85} left={93} />
      <ButtonFace src={buttonFace} alt="Diseño del botón" />
    </StyledSeeMenuButton>
  </Link>
);
