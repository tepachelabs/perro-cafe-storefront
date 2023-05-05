import {FC} from 'react';

import community from './img/community.svg';
import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {Text, Icon, Frame, TitleSectionProps} from './subtitle.styles';
import {Numeral} from '../../atoms/numeral';

interface Icon {
  src: string;
  alt: string;
}

const icons: Record<string, Icon> = {
  cult: {src: cult, alt: 'Ícono Culto'},
  menu: {src: menu, alt: 'Ícono Menú'},
  temple: {src: temple, alt: 'Ícono Templo'},
  community: {src: community, alt: 'Ícono Comunidad'},
};

export const Subtitle: FC<TitleSectionProps> = ({icon, numeral, children}) => (
  <Frame>
    {icon && <Icon src={icons[icon].src} alt={icons[icon].alt} />}
    {numeral && <Numeral label={numeral} />}
    <Text numeral={numeral}>{children}</Text>
  </Frame>
);
