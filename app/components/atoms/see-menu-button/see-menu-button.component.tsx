import {FC} from 'react';

import buttonFace from './img/button-face.svg';
import {
  ButtonFace,
  StyledSeeMenuButton,
  VerticalLine,
} from './see-menu-button.styles';
import {Link, LinkRender} from '../link';

interface Props {
  href: string;
  linkRender: LinkRender;
}

export const SeeMenuButton: FC<Props> = ({href, linkRender: _Link}) => (
  <Link to={href} linkRender={_Link}>
    <StyledSeeMenuButton>
      <VerticalLine top={93} left={83} />
      <VerticalLine top={85} left={93} />
      <ButtonFace src={buttonFace} alt="Diseño del botón" />
    </StyledSeeMenuButton>
  </Link>
);
