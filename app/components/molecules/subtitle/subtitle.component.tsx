import {FC, ReactNode} from 'react';

import community from './img/community.svg';
import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {Text, Icon, Frame} from './subtitle.styles';

export interface TitleSectionProps {
  children?: ReactNode;
  icon?: 'community' | 'cult' | 'menu' | 'temple';
}

const icons = {
  cult,
  menu,
  temple,
  community,
};

export const Subtitle: FC<TitleSectionProps> = ({icon, children}) => (
  <Frame>
    {icon && <Icon src={icons[icon]} />}
    <Text>{children}</Text>
  </Frame>
);
