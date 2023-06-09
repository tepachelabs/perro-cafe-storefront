import {FC} from 'react';

import {
  Img,
  ButtonFace,
  Label,
  StyledHorizontalButton,
} from './horizontal-button.styles';
import arrow from './img/arrow.svg';
import {Link, LinkRender} from '../link';

interface Props {
  label: string;
  href: string;
  linkRender: LinkRender;
}

export const HorizontalButton: FC<Props> = ({
  label,
  href,
  linkRender: _Link,
}) => (
  <Link to={href} linkRender={_Link}>
    <StyledHorizontalButton>
      <ButtonFace>
        <Label>{label}</Label>
        <Img src={arrow} alt="Flecha" />
      </ButtonFace>
    </StyledHorizontalButton>
  </Link>
);
