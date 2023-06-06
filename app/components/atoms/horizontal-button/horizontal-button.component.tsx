import {FC} from 'react';

import {
  Img,
  ButtonFace,
  Label,
  StyledHorizontalButton,
} from './horizontal-button.styles';
import arrow from './img/arrow.svg';
import {Link} from '../link';

interface Props {
  label: string;
  href: string;
}

export const HorizontalButton: FC<Props> = ({label, href}) => (
  <Link to={href}>
    <StyledHorizontalButton>
      <ButtonFace>
        <Label>{label}</Label>
        <Img src={arrow} alt="Flecha" />
      </ButtonFace>
    </StyledHorizontalButton>
  </Link>
);
