import {FC, ReactNode} from 'react';

import community from './img/community.svg';
import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {Text, Icon, Frame} from './subtitle.styles';

interface Icon {
  src: string;
  alt: string;
}

export interface TitleSectionProps {
  children?: ReactNode;
  icon?: 'community' | 'cult' | 'menu' | 'temple';
}

const icons: Record<string, Icon> = {
  cult: {src: cult, alt: 'Ícono Culto'},
  menu: {src: menu, alt: 'Ícono Menú'},
  temple: {src: temple, alt: 'Ícono Templo'},
  community: {src: community, alt: 'Ícono Comunidad'},
};

export const Subtitle: FC<TitleSectionProps> = ({icon, children}) => (
  <Frame>
    {icon && <Icon src={icons[icon].src} alt={icons[icon].alt} />}
    <Text>{children}</Text>
  </Frame>
);
